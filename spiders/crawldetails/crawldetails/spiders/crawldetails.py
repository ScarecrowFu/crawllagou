#coding:utf-8
import scrapy,json,re,os
from scrapy import Selector
from .. import CrawldetailsItem
from bs4 import BeautifulSoup


basedir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))



class KeysSpider(scrapy.Spider):
    name = "lagou"
    allowed_domains = ["*.lagou.com"]
    start_urls = [
        "http://www.lagou.com/"
        ]

    def parse(self,response):
        keywords = [json.loads(line) for line in open(basedir + '/jsons/keywords.json')]
        next_url = "http://www.lagou.com/jobs/positionAjax.json?kd={}"
        #1.爬去全部信息
        # try:
        #     keywords = response.xpath('//*[@id="sidebar"]/div[1]/div/div[2]/dl/dd/a/text()').extract()
        # except Exception, e:
        #     print e
        #2.爬去特定范围，如所有技术类
        for kd in keywords[0][u'技术'][0]:
            yield scrapy.FormRequest(next_url.format(kd.encode('utf-8')),callback=self.parse_json_link,meta={'kd':kd},dont_filter=True)
        #3.爬去某指定类别，如python
        # yield scrapy.Request("http://www.lagou.com/jobs/positionAjax.json?kd=python",callback=self.parse_json_link,meta={'kd':"python",'dont_redirect': True,"handle_httpstatus_list": [302]},dont_filter=True)

    def parse_json_link(self,response):
        kd = response.meta['kd']
        totalPageCount = json.loads(response.body_as_unicode())["content"]['totalPageCount']
        for page in range((int(totalPageCount))):
            yield scrapy.Request("{}&pn={}".format(response.url,page+1),callback=self.parse_id,meta={'kd':kd},dont_filter=True)

    def parse_id(self,response):
        kd = response.meta['kd']
        detail_url = "http://www.lagou.com/jobs/{}.html"
        json_response = json.loads(response.body_as_unicode())
        for id in json_response["content"]['result']:
            # item["link"].append(id['positionId'])
            yield scrapy.Request(detail_url.format(id['positionId']),callback=self.parse_detail,meta={'kd':kd},dont_filter=True)

    def parse_detail(self,response):
        item = CrawldetailsItem()
        sel = Selector(response)

        try:
            item["kd"] = response.meta['kd']
            item["title"] = self.get_text(sel,'//*[@id="job_detail"]/dt/h1/@title')
            item["company"] = sel.xpath('//*[@id="container"]/div[2]/dl/dt/a/div/h2/text()').extract()[0].strip()
            item["city"] = sel.xpath('//*[@id="job_detail"]/dd[1]/p[1]/span[2]/text()').extract()[0]
            item["address"] = sel.xpath('//*[@id="container"]/div[2]/dl/dd/div[1]/text()').extract()[0]
            industry = sel.xpath('//*[@id="container"]/div[2]/dl/dd/ul[1]/li[1]').extract()[0]
            item["industry"] = BeautifulSoup(industry).get_text().encode("utf-8").split(' ')[1].strip()
            scale = sel.xpath('//*[@id="container"]/div[2]/dl/dd/ul[1]/li[2]').extract()[0]
            item["scale"] = BeautifulSoup(scale).get_text().encode("utf-8").split(' ')[1].strip()
            phase = sel.xpath('//*[@id="container"]/div[2]/dl/dd/ul[2]/li').extract()[0]
            item["phase"] = BeautifulSoup(phase).get_text().encode("utf-8").split(' ')[1].strip()
            item["salary"] = sel.xpath('//*[@id="job_detail"]/dd[1]/p[1]/span[1]/text()').extract()[0]
            item["experience"] = sel.xpath('//*[@id="job_detail"]/dd[1]/p[1]/span[3]/text()').extract()[0]
            item["education"] = sel.xpath('//*[@id="job_detail"]/dd[1]/p[1]/span[4]/text()').extract()[0]
            item["description"] = self.get_text(sel,'//*[@id="job_detail"]/dd[2]')
            item["url"] = response.url
            item["published"] = sel.xpath('//*[@id="job_detail"]/dd[1]/p[3]/text()').extract()[0][:-8]
            item["tag"] = self.get_text(sel, '//*[@id="job_detail"]/dd[1]/p[2]/text()')


        except Exception, e:
            print e
        yield item


    def get_text(self,sel,path):
        xpath_text = sel.xpath(path).extract()[0]
        text = BeautifulSoup(xpath_text).get_text()
        text = re.sub(r'\n|\r|\t|&nbsp|\xa0|\\xa0|\u3000|\\u3000|\\u0020|\u0020|\\|"\"|\"', '', text)
        return text



