from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
import time
import csv
import os
import re
import pickle
import sys
from utils.base_helpers import logger, generate_header, create_or_get_directory, \
    COMMON_CITIES, ALL_CITIES, CATEGORIES, yaml_configure_parser
from utils.mongodb_helpers import MonGoDBHelper


# todo: 添加数据保存到MYSQL或者MONGODB
class LaGouSpider(object):

    def __init__(self, proxy_server=None, headless=False, executable_path='', sleep_interval=1,
                 save_method='file', save_file_path='lagou_data', mongo_db=None):
        """
        :param sleep_interval: 关键动作时间的时间间隔
        :param proxy_server: 代理服务器
        :param headless: 谷歌浏览器是否在后台运行
        :param executable_path: 谷歌浏览器驱动所在地址
        :param save_method: 保存方法, 分别为file, database
        :param save_file_path: 若保存为 file, 指定具体文件保存路径
        :param mongo_db:  若保存为 database, 指定MongoDB类
        """
        self.url = 'https://www.lagou.com/'
        self.sleep_interval = sleep_interval
        self.proxy_server = proxy_server
        self.headless = headless
        self.executable_path = executable_path
        self.proxies = {"http": proxy_server, "https": proxy_server}
        self.browser = self.init_browser()
        self.detail_browser = None  # 使用单独浏览器打开详情页, 每10个详情请求, 重新打开一个浏览器
        self.detail_count = 0
        self.save_method = save_method
        self.save_file_path = save_file_path
        self.mongo_db = mongo_db
        self.urls = []

    def init_browser(self, headless=False):
        """初始化浏览器"""
        chrome_options = webdriver.ChromeOptions()
        if self.headless or headless:
            chrome_options.add_argument("--headless")
            chrome_options.add_argument("--disable-gpu")  # windows 平台需要添加此参数
        if self.proxy_server:
            chrome_options.add_argument('--proxy-server={}'.format(self.proxy_server))
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)
        browser = webdriver.Chrome(chrome_options=chrome_options, executable_path=self.executable_path)
        browser.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
            "source": """
                                    Object.defineProperty(navigator, 'webdriver', {
                                      get: () => undefined
                                    })
                                  """
        })
        browser.execute_cdp_cmd("Network.enable", {})
        browser.execute_cdp_cmd("Network.setExtraHTTPHeaders", {"headers": generate_header()})
        logger.info(f'初始化浏览器')
        return browser

    def quit_browser(self, browser=None):
        logger.info('关闭浏览器窗口')
        if browser:
            browser.quit()
        else:
            self.browser.quit()

    def run(self, username, password, keyword=None):
        """运行入口"""
        self.login(username, password)
        # common_cities, all_cities = self.get_cities()
        # if not common_cities: common_cities = COMMON_CITIES
        # if not all_cities: all_cities = ALL_CITIES
        common_cities = COMMON_CITIES
        all_cities = ALL_CITIES
        logger.info(f'获取常用城市:{common_cities}')
        logger.info(f'获取全部城市:{all_cities}')
        time.sleep(self.sleep_interval)
        if keyword:
            categories = [keyword]
        else:
            # categories = self.get_categories()
            # if not categories: categories = CATEGORIES
            categories = CATEGORIES
            logger.info(f'获取全部搜索分类:{categories}')
        for category in categories:
            for common_city in common_cities:
                districts = self.get_districts(common_city)
                logger.info(f'获取城市:{common_city}的行政区域:{districts}')
                # 当触发爬虫验证机制, 需要关闭浏览器重新开始, 正常则继续下一个
                while True:
                    running = self.main(keyword=category, city=common_city)
                    if running:
                        break
                    else:
                        continue
                for district in districts:
                    while True:
                        running = self.main(keyword=category, city=common_city, district=district)
                        if running:
                            break
                        else:
                            continue
            # for all_city in all_cities:
            #     districts = self.get_districts(all_city)
            #     logger.info(f'获取城市:{all_city}的行政区域:{districts}')
            #     while True:
            #         running = self.main(keyword=category, city=all_city)
            #         if running:
            #             break
            #         else:
            #             continue
            #     for district in districts:
            #         while True:
            #             running = self.main(keyword=category, city=all_city, district=district)
            #             if running:
            #                 break
            #             else:
            #                 continue

    def main(self, keyword='python', city='全国', district=None):
        """爬虫主方法"""
        try:
            keyword = keyword.lower()
            logger.info(f'当前搜索关键字:{keyword}, 地点:{city}, 行政区域:{district}')
            self.browser.get(url=self.url)
            time.sleep(self.sleep_interval)
            try:
                WebDriverWait(driver=self.browser, timeout=10).until(
                    EC.presence_of_element_located((By.XPATH, "//p[@class='checkTips']/a"))
                ).click()
            except Exception as error:
                pass
            self.browser.find_element_by_id('search_input').send_keys(keyword)
            time.sleep(self.sleep_interval)
            self.browser.find_element_by_class_name('search_button').click()
            try:
                WebDriverWait(driver=self.browser, timeout=10).until(
                    EC.presence_of_element_located((By.CLASS_NAME, "body-btn"))
                ).click()
            except Exception as error:
                pass
            time.sleep(self.sleep_interval)
            # 进入选择城市
            self.browser.find_element_by_class_name('position-head').find_element_by_class_name('btn-more').click()
            self.browser.find_element_by_xpath("//*[contains(text(), '全部城市')]").click()
            self.browser.find_element_by_xpath(f"//*[contains(text(), '{city}')]").click()
            time.sleep(self.sleep_interval)
            if district:
                district_div_element = WebDriverWait(driver=self.browser, timeout=10).until(
                    EC.presence_of_element_located((By.XPATH, "//div[@data-type='district']"))
                )
                district_div_element.find_element_by_xpath(f"//*[contains(text(), '{district}')]").click()
            logger.info(f'开始获取当前条件:{keyword}, {city}, {district}的职位链接..........')
            self.urls = []
            self.get_urls()
            self.page_scroll()
            for url in self.urls:
                try:
                    m = re.search('jobs/(.+?).html', url)
                    data_id = m.group(1)
                except:
                    data_id = url
                if self.save_method == 'database':
                    self.save_to_mongodb(data_id, url)
                else:
                    if not district:
                        district = '不限'
                    file_path = os.path.join(self.save_file_path, f'{keyword}.csv')
                    saved_data = self.get_saved_jobs(file_path)
                    saved_data = [saved['id'] for saved in saved_data]
                    if data_id in saved_data:
                        logger.warning(f'ID为:{data_id}的数据已经保存在:{file_path}, 不再保存')
                    else:
                        try:
                            data = self.parse_details(url)
                            self.save_to_file(data, file_path)
                        except Exception as error:
                            logger.error(f'获取职位详情发生错误:{error}')
                        time.sleep(self.sleep_interval)
            return True
        except Exception as error:
            logger.error(f'爬取过程中发生错误, 可能触发了反爬虫机制. 重新打开浏览器:{error}')
            self.quit_browser(self.browser)
            time.sleep(self.sleep_interval)
            self.browser = self.init_browser()
            return False

    def save_cookie(self):
        # 保存cookie文件
        logger.info('保存cookie')
        with open('configures/cookies_file', 'wb') as f:
            pickle.dump(self.browser.get_cookies(), f)

    def load_cookie(self):
        # 加载cookie
        if not os.path.exists('configures/cookies_file'):
            return False
        logger.info('载入cookie')
        with open('configures/cookies_file', 'rb') as f:
            cookies = pickle.load(f)
            for cookie in cookies:
                self.browser.add_cookie({
                    'name': cookie['name'],
                    'value': cookie['value'],
                    'path': cookie['path'],
                    'secure': cookie['secure'],
                })
        return True

    def login(self, username, password):
        self.browser.get(self.url)
        self.load_cookie()
        time.sleep(self.sleep_interval)
        self.browser.refresh()
        try:
            login_element = self.browser.find_element_by_class_name('login')
            is_login = False
        except:
            is_login = True
            logger.info(f'成功登录拉勾网')
        if not is_login:
            logger.warning(f'尚未登录拉勾网, 进行登录')
            self.browser.get('https://passport.lagou.com/login/login.html')
            time.sleep(self.sleep_interval)
            self.browser.find_element_by_xpath("//input[@placeholder='请输入常用手机号/邮箱']").send_keys(username)
            time.sleep(self.sleep_interval)
            self.browser.find_element_by_xpath("//input[@placeholder='请输入密码']").send_keys(password)
            time.sleep(self.sleep_interval)
            self.browser.find_element_by_xpath("//form[@class='active']/div[5]/input[@type='submit']").click()
            # 遇到验证码后  阻塞  手动验证
            c = input('如果出现验证码, 请手动验证后回车, 否则直接回车')
            self.save_cookie()
            logger.info(f'成功登录拉勾网')

    def page_scroll(self):
        """获取所有页数的链接"""
        while True:
            try:
                next_btn = WebDriverWait(driver=self.browser, timeout=5).until(
                    EC.presence_of_element_located((By.XPATH, "//div[@class='pager_container']/span[last()]"))
                )
            except:
                return
            if "pager_next_disabled" in next_btn.get_attribute("class"):
                return
            else:
                next_btn.click()
                time.sleep(self.sleep_interval)
                self.get_urls()
                time.sleep(self.sleep_interval)

    def get_urls(self):
        """获取当前页的链接"""
        links = self.browser.find_elements_by_class_name("position_link")
        for link in links:
            url = link.get_attribute('href')
            self.urls.append(url)

    def convert_string(self, value):
        """转换无效字符"""
        if value:
            value = re.sub(r"\s", "", value)
            value = re.sub(r"/", "", value)
        return value

    def parse_details(self, url):
        """解析具体内容"""
        if self.detail_count == 0:
            self.detail_browser = self.init_browser(headless=True)  # 默认在后台运行
            self.detail_browser.get(url)
            self.load_cookie()
            time.sleep(self.sleep_interval)
            self.detail_browser.refresh()
        else:
            self.detail_browser.get(url)
        try:
            name = self.detail_browser.find_element_by_class_name('job-name').get_attribute('title')
        except:
            name = ''
        job_request_elements = self.detail_browser.find_element_by_class_name('job_request').find_elements_by_tag_name('span')

        try:
            salary = job_request_elements[0].text
        except:
            salary = ''
        try:
            address = job_request_elements[1].text
            city = job_request_elements[1].text
        except:
            address = ''
            city = ''
        try:
            experience = job_request_elements[2].text
        except:
            experience = ''
        try:
            eduction = job_request_elements[3].text
        except:
            eduction = ''
        try:
            character = job_request_elements[4].text
        except:
            character = ''
        try:
            work_address = self.detail_browser.find_element_by_class_name('work_addr').text
        except:
            work_address = ''
        if work_address:
            address = work_address.replace('查看地图', '')
        if address:
            city = address.split('-')[0]
        try:
            advantage = self.detail_browser.find_element_by_class_name('job-advantage').find_element_by_tag_name('p').text
        except:
            advantage = ''
        try:
            requirement = self.detail_browser.find_element_by_class_name('job-detail').text
        except:
            requirement = ''
        job_company_element = self.detail_browser.find_element_by_class_name('job_company')
        try:
            company_name = job_company_element.find_element_by_class_name('b2').get_attribute('alt')
        except:
            company_name = ''
        try:
            company_nickname = job_company_element.find_element_by_tag_name('em').text
        except:
            company_nickname = ''
        try:
            company_field = job_company_element.find_element_by_xpath("//*[contains(@class, 'icon-glyph-fourSquare')]/following-sibling::h4").text
        except:
            company_field = ''
        try:
            company_investment = job_company_element.find_element_by_xpath("//*[contains(@class, 'icon-glyph-doller')]/following-sibling::h4").text
        except:
            company_investment = ''
        try:
            company_scale = job_company_element.find_element_by_xpath("//*[contains(@class, 'icon-glyph-trend')]/following-sibling::h4").text
        except:
            company_scale = ''
        try:
            company_size = job_company_element.find_element_by_xpath("//*[contains(@class, 'icon-glyph-figure')]/following-sibling::h4").text
        except:
            company_size = ''
        try:
            company_link = job_company_element.find_element_by_xpath("//*[contains(@class, 'icon-glyph-home')]/following-sibling::a").get_attribute('href')
        except:
            company_link = ''
        try:
            m = re.search('jobs/(.+?).html', url)
            data_id = m.group(1)
        except:
            data_id = url
        data = {
            'id': data_id,
            'url': url,
            'name': name, 'salary': self.convert_string(salary), 'experience': self.convert_string(experience),
            'eduction': self.convert_string(eduction), 'character': self.convert_string(character),
            'city': city,
            'address': self.convert_string(address), 'advantage': advantage,
            'requirement': requirement, 'company_name': company_name, 'company_nickname': company_nickname,
            'company_field': company_field, 'company_investment': company_investment,
            'company_scale': company_scale, 'company_size': company_size,
            'company_link': company_link, 'source': 'lagou'
        }
        logger.debug(data)
        self.detail_count += 1
        if self.detail_count > 5:
            self.quit_browser(self.detail_browser)
            self.detail_count = 0
        return data

    def get_cities(self):
        """获取所有城市分类"""
        self.browser.get('https://www.lagou.com/jobs/allCity.html')
        common_cities_element = self.browser.find_element_by_class_name('common_city').find_elements_by_tag_name('li')
        common_cities = []
        all_cities = []
        try:
            for common_city_element in common_cities_element:
                common_city = common_city_element.find_element_by_tag_name('a').text
                common_cities.append(common_city)
            all_cities_list_element = self.browser.find_elements_by_class_name('city_list')
            for city_list_element in all_cities_list_element:
                cities_element = city_list_element.find_elements_by_tag_name('li')
                for city_element in cities_element:
                    city = city_element.find_element_by_tag_name('a').text
                    all_cities.append(city)
        except Exception as error:
            logger.error(f'获取城市分类发生错误, 采用默认城市分类:{error}')
        return common_cities, all_cities

    def get_districts(self, city):
        """获取城市的行政区域"""
        districts = []
        try:
            if city == '全国':
                return districts
            self.browser.get(url=self.url)
            time.sleep(self.sleep_interval)
            try:
                WebDriverWait(driver=self.browser, timeout=10).until(
                    EC.presence_of_element_located((By.XPATH, "//p[@class='checkTips']/a"))
                ).click()
            except Exception as error:
                pass
            self.browser.find_element_by_id('search_input').send_keys('python')
            time.sleep(self.sleep_interval)
            self.browser.find_element_by_class_name('search_button').click()
            try:
                WebDriverWait(driver=self.browser, timeout=10).until(
                    EC.presence_of_element_located((By.CLASS_NAME, "body-btn"))
                ).click()
            except Exception as error:
                pass
            time.sleep(self.sleep_interval)
            # 进入选择城市
            self.browser.find_element_by_class_name('position-head').find_element_by_class_name('btn-more').click()
            self.browser.find_element_by_xpath("//*[contains(text(), '全部城市')]").click()
            self.browser.find_element_by_xpath(f"//*[contains(text(), '{city}')]").click()
            time.sleep(self.sleep_interval)
            district_div_element = WebDriverWait(driver=self.browser, timeout=10).until(
                EC.presence_of_element_located((By.XPATH, "//div[@data-type='district']"))
            )
            district_list_element = district_div_element.find_elements_by_tag_name('a')
            for district_element in district_list_element:
                if district_element.text == '不限':
                    continue
                districts.append(district_element.text)
        except Exception as error:
            logger.error(f'获取形成区域发生错误:{error}')
        return districts

    def get_categories(self):
        categories = []
        try:
            self.browser.get(self.url)
            try:
                WebDriverWait(driver=self.browser, timeout=10).until(
                    EC.presence_of_element_located((By.XPATH, "//p[@class='checkTips']/a"))
                ).click()
            except Exception as error:
                pass
            menu_box_elements = self.browser.find_elements_by_class_name('menu_box')
            for menu_box_element in menu_box_elements:
                menu_box_element.find_element_by_class_name('arrow').click()
                time.sleep(self.sleep_interval)
                menu_sub_element = menu_box_element.find_element_by_class_name('menu_sub')
                categories_elements = menu_sub_element.find_elements_by_tag_name('a')
                for category_element in categories_elements:
                    categories.append(category_element.text)
        except Exception as error:
            logger.error(f'获取搜索分类发生错误, 采用默认搜索分类:{error}')
        return categories

    def get_saved_jobs(self, file_path):
        saved_jobs = []
        if os.path.exists(file_path):
            with open(file_path, 'r') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    saved_jobs.append(row)
        return saved_jobs

    def save_to_file(self, data, file_path):
        create_or_get_directory(os.path.dirname(file_path))
        if os.path.exists(file_path):
            with open(file_path, 'a') as f:
                dict_writer = csv.DictWriter(f, data.keys())
                dict_writer.writerow(data)
            logger.info(f'保存数据至:{file_path}')
        else:
            with open(file_path, 'w') as f:
                dict_writer = csv.DictWriter(f, data.keys())
                dict_writer.writeheader()
                dict_writer.writerow(data)
            logger.info(f'保存数据至:{file_path}')

    def save_to_mongodb(self, data_id, url):
        saved_data = self.mongo_db.find_one('lagou', {'id': data_id})
        if saved_data:
            logger.warning(f'ID为:{data_id}的数据已经保存在MongoDB, 不再保存!')
        else:
            data = self.parse_details(url)
            self.mongo_db.insert_one('lagou', data)
            logger.info(f'保存数据：{data["id"]}在MongoDB')


if __name__ == '__main__':
    try:
        configure_file = sys.argv[1]
    except:
        configure_file = 'configures/configure.yml'
    configures = yaml_configure_parser(configure_file)
    mongo_db_configures = configures.get('mongo_db', {})
    webdriver_option_configures = configures.get('webdriver_option', {})
    lagou_configures = configures.get('lagou', {})

    if mongo_db_configures.get('host', ''):
        mongo_db = MonGoDBHelper(database='jobs', **mongo_db_configures)
    else:
        mongo_db = None

    lagou_spider = LaGouSpider(proxy_server=webdriver_option_configures['proxy_server'],
                               headless=webdriver_option_configures['headless'],
                               executable_path=webdriver_option_configures['executable_path'],
                               sleep_interval=lagou_configures['sleep_interval'],
                               save_method=lagou_configures['save_method'],
                               save_file_path=lagou_configures['save_file_path'],
                               mongo_db=mongo_db,
                               )
    lagou_spider.run(username=lagou_configures['username'], password=lagou_configures['password'],
                     keyword=lagou_configures['keyword'])

