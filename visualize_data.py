import os
import csv
from pandas import DataFrame
import pandas as pd
from jinja2 import Environment, FileSystemLoader
import glob
import re
from pyecharts import options as opts
from pyecharts.charts import Pie, Bar, Polar, Geo, WordCloud
from pyecharts.globals import CurrentConfig, ChartType
from utils.base_helpers import create_or_get_directory, AREA_ECHARTS_JS, yaml_configure_parser, logger
from pyecharts.faker import Faker
import operator
from pyecharts.commons.utils import JsCode
import collections
import jieba.analyse
import sys
import warnings
warnings.simplefilter(action='ignore', category=FutureWarning)


# todo: 添加从MYSQL或者MONGODB 读取数据

CurrentConfig.ONLINE_HOST = "../js/"


class DataVisualize(object):
    def __init__(self, report_path='report', data_type='file', file_path='lagou_data'):
        self.report_path = report_path
        self.data_type = data_type
        self.file_path = file_path
        self.data = []
        self.frame = None
        self.left_charts = []
        self.middle_charts = []
        self.right_charts = []
        self.report_javascript = []

    def read_data_to_frame(self, keyword='', save_method='file'):
        """获取数据并转传成 DataFrame"""
        if keyword:
            base_dir = os.path.dirname(__file__)
            data_files = [os.path.join(base_dir, 'lagou_data', f'{keyword}.csv')]
        else:
            data_files = glob.glob(os.path.join('lagou_data', '*.csv'))
        for data_file in data_files:
            with open(data_file, 'r') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    self.data.append(dict(row))
        self.frame = DataFrame(self.data)

    def get_javascript_string(self, html_path):
        """从pyecharts生成的HTML文件中提取js代码"""
        with open(html_path, encoding='utf-8') as f:
            html = f.read()
        script_string = re.findall('(?si)var option(.*?)chart_', html)[0]
        script_string = script_string.strip()
        script_string = script_string.split('=', 1)[1].strip()
        return script_string

    def set_report_javascript(self, script_string, chart_name):
        """生成所需js代码"""
        script_string = """
                    function %s() {
                        var jobChart = echarts.init(document.getElementById('%s'));
                        option = %s
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    """ % (chart_name, chart_name, script_string)
        self.report_javascript.append({'name': chart_name, 'script': script_string})

    def generate_report_javascript(self):
        """生成报告文件所需js"""
        javascript_file = os.path.join('report', 'js', 'report_charts.js')
        report_js = '$(function () {'
        for js in self.report_javascript:
            report_js = f'{report_js}\n{js["name"]}();\n{js["script"]}\n'
        report_js = report_js + '});'
        with open(javascript_file, 'w') as f:
            f.write(report_js)

    def generate_report(self, keyword, city_max_jobs='', city_max_jobs_num=''):
        """根据模板生成报告文件"""
        env = Environment(loader=FileSystemLoader('./report/template'))
        template = env.get_template('template.html')
        total = len(self.data)
        with open("./report/report.html", 'w+') as f:
            html_content = template.render(
                welcome='岗位可视化数据展示.......',
                title=f'{keyword}岗位可视化数据展示',
                total=total,
                city_max_jobs=city_max_jobs,
                city_max_jobs_num=city_max_jobs_num,
                left_charts=self.left_charts,
                middle_charts=self.middle_charts,
                right_charts=self.right_charts)
            f.write(html_content)

    def salary_pie_chart(self):
        """薪酬分布"""
        salary_xaxis = ['0', '5000', '10000', '15000', '20000', '30000', '40000', '50000', '60000', '70000', '80000', '90000', '100000']
        salary_yaxis = []
        kd = self.frame.salary.value_counts()
        salary_dict = {0: 0, 5000: 0, 10000: 0, 15000: 0, 20000: 0, 30000: 0,
                       40000: 0, 50000: 0, 60000: 0, 70000: 0, 80000: 0, 90000: 0, 100000: 0}
        for k, v in dict(kd).items():
            min_salary = float(k.split('-')[0].split('·')[0].replace('以上', '').rstrip('k').rstrip('K')) * 1000
            try:
                max_salary = float(k.split('-')[1].split('·')[0].replace('以上', '').rstrip('k').rstrip('K')) * 1000
            except:
                max_salary = min_salary
            salary = 0.5 * (min_salary + max_salary)
            if salary in range(0, 5000): salary=0
            if salary in range(5000, 10000): salary=5000
            if salary in range(10000, 15000): salary=10000
            if salary in range(15000, 20000): salary=15000
            if salary in range(20000, 30000): salary=20000
            if salary in range(30000, 40000): salary=30000
            if salary in range(40000, 50000): salary=40000
            if salary in range(50000, 60000): salary=50000
            if salary in range(60000, 70000): salary=60000
            if salary in range(70000, 80000): salary=70000
            if salary in range(80000, 90000): salary=80000
            if salary in range(90000, 100000): salary=90000
            if salary in range(100000, 10000000000): salary=100000
            if salary_dict.get(salary, ''):
                salary_dict[salary] = salary_dict[salary] + v
            else:
                salary_dict[salary] = v
        salary_dict = dict(collections.OrderedDict(sorted(salary_dict.items())))
        for salary_key, salary_value in salary_dict.items():
            salary_yaxis.append(opts.BarItem(
                name=str(salary_key),
                value=int(salary_value),
                itemstyle_opts=opts.ItemStyleOpts(color="#d48265"),
            ))
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'salary_pie_chart.html')
        c = (
            Bar(init_opts=opts.InitOpts(width="60%"))
                .add_xaxis(salary_xaxis)
                .add_yaxis("", salary_yaxis, category_gap=-1)
                .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
                .set_global_opts(yaxis_opts=opts.AxisOpts(name="岗位数量",  axislabel_opts=opts.LabelOpts(color='red'),
                                                          name_textstyle_opts=opts.TextStyleOpts(color='#d48265')),
                                 xaxis_opts=opts.AxisOpts(name="薪酬", axislabel_opts=opts.LabelOpts(color='red'),
                                                          name_textstyle_opts=opts.TextStyleOpts(color='#d48265')),
                                 tooltip_opts=opts.TooltipOpts(
                                     trigger="item", formatter=JsCode(
                                         """function (params) {
                                                var name='';
                                                if (params.name < 5000){
                                                    name='小于5K'
                                                }
                                                else if (params.name < 10000) {
                                                    name='5K-10K'
                                                }
                                                else if (params.name < 15000) {
                                                    name='10K-15K'
                                                }
                                                else if (params.name < 20000) {
                                                    name='15K-20K'
                                                }
                                                else if (params.name < 30000) {
                                                    name='20K-30K'
                                                }
                                                else if (params.name < 40000) {
                                                    name='30K-40K'
                                                }
                                                else if (params.name < 50000) {
                                                    name='40K-50K'
                                                }
                                                else if (params.name < 60000) {
                                                    name='50K-60K'
                                                }
                                                else if (params.name < 70000) {
                                                    name='60K-70K'
                                                }
                                                else if (params.name < 80000) {
                                                    name='70K-80K'
                                                }
                                                else if (params.name < 90000) {
                                                    name='80K-90K'
                                                }
                                                else if (params.name < 100000) {
                                                    name='90K-100K'
                                                }
                                                else {
                                                    name='大于100K'
                                                }
                                                return name+':'+params.value;
                                                }
                                            """
                                            )
                                 ),
                                 )
                .render(html_path)
        )
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'salary_pie_chart')
        self.middle_charts.append({'title': '薪资分布', 'name': 'salary_pie_chart'})

    def experience_pie_chart(self):
        """工作经验统计"""
        kd = self.frame.experience.value_counts()
        results = [[k, str(v)] for k, v in dict(kd).items()]
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'experience_pie_chart.html')
        c = (
            Pie(init_opts=opts.InitOpts())
                .add(
                series_name="工作经验",
                data_pair=results,
                rosetype="radius",
                radius="55%",
                center=["50%", "50%"],
                label_opts=opts.LabelOpts(is_show=False, position="center"),
            )
                .set_global_opts(
                legend_opts=opts.LegendOpts(is_show=False),
            )
                .set_series_opts(
                tooltip_opts=opts.TooltipOpts(
                    trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
                ),
                label_opts=opts.LabelOpts(color="rgba(255, 255, 255, 0.3)"),
            )
                .render(html_path)
        )
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'experience_pie_chart')
        self.left_charts.append({'title': '工作经验统计', 'name': 'experience_pie_chart'})

    def eduction_pie_chart(self):
        """学历统计"""
        kd = self.frame.eduction.value_counts()
        results = [[k, str(v)] for k, v in dict(kd).items()]
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'eduction_pie_chart.html')
        c = (
            Pie()
                .add("学历", results)
                .set_colors(["green", "yellow", "red", "pink", "orange", "purple"])
                .set_global_opts(legend_opts=opts.LegendOpts(is_show=False),)
                .set_series_opts(tooltip_opts=opts.TooltipOpts(
                trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
            ))
                .render(html_path)
        )
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'eduction_pie_chart')
        self.left_charts.append({'title': '学历统计', 'name': 'eduction_pie_chart'})

    def character_pie_chart(self):
        """岗位性质统计"""
        kd = self.frame.character.value_counts()
        results = [[k, str(v)] for k, v in dict(kd).items()]
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'character_pie_chart.html')
        c = (
            Pie()
                .add("岗位性质", results)
                .set_global_opts(legend_opts=opts.LegendOpts(is_show=False),)
                .set_series_opts(tooltip_opts=opts.TooltipOpts(
                trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
            ))
                .render(html_path)
        )
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'character_pie_chart')
        self.left_charts.append({'title': '岗位性质统计', 'name': 'character_pie_chart'})

    def company_size_bar_chart(self):
        """企业规模统计"""
        kd = self.frame.company_size.value_counts()
        results = [[k, str(v)] for k, v in dict(kd).items()]
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'company_size_bar_chart.html')
        c = (
            Pie(init_opts=opts.InitOpts())
                .add(
                series_name="工作经验",
                data_pair=results,
                rosetype="radius",
                radius="55%",
                center=["50%", "50%"],
                label_opts=opts.LabelOpts(is_show=False, position="center"),
            )
                .set_global_opts(
                legend_opts=opts.LegendOpts(is_show=False),
            )
                .set_series_opts(
                tooltip_opts=opts.TooltipOpts(
                    trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
                ),
                label_opts=opts.LabelOpts(color="rgba(255, 255, 255, 0.3)"),
            )
                .render(html_path)
        )
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'company_size_bar_chart')
        self.right_charts.append({'title': '企业规模统计', 'name': 'company_size_bar_chart'})

    def company_scale_bar_chart(self):
        """企业发展阶段统计"""
        kd = self.frame.company_scale.value_counts()
        results = [[k, str(v)] for k, v in dict(kd).items()]
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'company_scale_bar_chart.html')
        c = (
            Pie()
                .add("企业发展阶段", results)
                .set_colors(["green", "yellow", "red", "pink", "orange", "purple"])
                .set_global_opts(legend_opts=opts.LegendOpts(is_show=False), )
                .set_series_opts(tooltip_opts=opts.TooltipOpts(
                trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
            ))
                .render(html_path)
        )
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'company_scale_bar_chart')
        self.right_charts.append({'title': '企业发展阶段统计', 'name': 'company_scale_bar_chart'})

    def company_field_chart(self):
        """企业领域统计"""
        kd = self.frame.company_field.value_counts()
        field_count = {}
        for field_key, field_value in dict(kd).items():
            field_keys = re.split(r',|，|、|\.|\|\t| |丨', field_key)
            for key in field_keys:
                if field_count.get(key, None):
                    field_count[key] = field_count[key] + field_value
                else:
                    field_count[key] = field_value
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'company_field_chart.html')
        c = (
            Pie()
                .add("企业领域", [[k, str(v)] for k, v in field_count.items()])
                .set_global_opts(legend_opts=opts.LegendOpts(is_show=False),)
                .set_series_opts(tooltip_opts=opts.TooltipOpts(
                trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
            ))
                .render(html_path)
        )
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'company_field_chart')
        self.right_charts.append({'title': '企业领域统计', 'name': 'company_field_chart'})

    def company_name_chart(self):
        """招聘数前10公司"""
        kd = self.frame.company_name.value_counts()[:10]
        results = [[k, str(v)] for k, v in dict(kd).items()]
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'company_name_chart.html')
        c = (
            Pie()
                .add("招聘数前10公司", results)
                .set_global_opts(legend_opts=opts.LegendOpts(is_show=False), )
                .set_series_opts(tooltip_opts=opts.TooltipOpts(
                trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
            ))
                .render(html_path)
        )
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'company_name_chart')
        self.right_charts.append({'title': '招聘数前10公司', 'name': 'company_name_chart'})

    def address_map_chart(self):
        """地址省份统计"""
        kd = self.frame.city.value_counts()[:10]
        results = [{'name': k, 'value': v}for k, v in dict(kd).items()]
        javascript_file = os.path.join('report', 'js', 'area_echarts.js')
        with open(javascript_file, 'w') as f:
            f.write(AREA_ECHARTS_JS % ('address_map_chart', results))
        city_max_jobs = max(dict(kd).items(), key=operator.itemgetter(1))[0]
        return city_max_jobs, dict(kd)[city_max_jobs]

    def address_pie_chart(self):
        """招聘数前10城市"""
        kd = self.frame.city.value_counts()[:10]
        results = [[k, str(v)] for k, v in dict(kd).items()]
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'address_pie_chart.html')
        c = (
            Pie()
                .add("招聘数前10城市", results)
                .set_global_opts(legend_opts=opts.LegendOpts(is_show=False), )
                .set_series_opts(tooltip_opts=opts.TooltipOpts(
                trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
            ))
                .render(html_path)
        )
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'address_pie_chart')
        self.left_charts.append({'title': '招聘数前10城市', 'name': 'address_pie_chart'})

    def advantage_word_cloud(self):
        """职位诱惑词云"""
        jieba.analyse.set_stop_words('configures/stop_words.txt')
        data, word = [], ''
        for content in self.frame['advantage']:
            try:
                word = "".join(content)
            except Exception as error:
                print(f"获取职位诱惑发生错误:{error}")
            data.append(word)
        tags = jieba.analyse.extract_tags("".join(data).lower(), topK=100, withWeight=True)
        advantage_jieba = []
        for wd, weight in tags:
            advantage_jieba.append([wd, weight])
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'advantage_word_cloud.html')
        (
            WordCloud()
                .add(series_name="职位诱惑", data_pair=advantage_jieba, word_size_range=[16, 166])
                .set_global_opts(

                tooltip_opts=opts.TooltipOpts(is_show=True),
            )
                .render(html_path)
        )
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'advantage_word_cloud')
        self.middle_charts.append({'title': '职位诱惑关键字', 'name': 'advantage_word_cloud'})

    def requirement_word_cloud(self):
        """招聘要求词云"""
        jieba.analyse.set_stop_words('configures/stop_words.txt')
        data, word = [], ''
        for content in self.frame['requirement']:
            try:
                word = "".join(content)
            except Exception as error:
                print(f"获取职位诱惑发生错误:{error}")
            data.append(word)
        tags = jieba.analyse.extract_tags("".join(data).lower(), topK=100, withWeight=True)
        advantage_jieba = []
        for wd, weight in tags:
            advantage_jieba.append([wd, weight])
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'requirement_word_cloud.html')
        (
            WordCloud()
                .add(series_name="招聘要求", data_pair=advantage_jieba, word_size_range=[16, 166])
                .set_global_opts(

                tooltip_opts=opts.TooltipOpts(is_show=True),
            )
                .render(html_path)
        )
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'requirement_word_cloud')
        self.middle_charts.append({'title': '招聘要求关键字', 'name': 'requirement_word_cloud'})

    def city_experience_chart(self):
        """前10城市的经验要求"""
        city_experience = pd.crosstab(self.frame.city,
                                      self.frame.experience, margins=True).sort_values(by='All',
                                                                                       ascending=False)[:10]
        city_experience = city_experience.drop('All', axis=0).drop('All', axis=1)
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'city_experience_chart.html')
        bar = Bar(init_opts=opts.InitOpts(width="60%"))
        bar.add_xaxis(list(city_experience.index))
        for i in range(len(list(city_experience.T.index))):
            bar.add_yaxis(city_experience.T.index[i], [str(v) for v in city_experience.T.values[i]])
        bar.set_global_opts(
            legend_opts=opts.LegendOpts(is_show=False),
            xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(rotate=-20, color='red')),
            yaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(color='red')),
        )
        bar.render(html_path)
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'city_experience_chart')
        self.left_charts.append({'title': '前10城市的经验要求', 'name': 'city_experience_chart'})

    def city_eduction_chart(self):
        """前10城市的学历要求"""
        city_eduction = pd.crosstab(self.frame.city,
                                      self.frame.eduction, margins=True).sort_values(by='All',
                                                                                       ascending=False)[:10]
        city_eduction = city_eduction.drop('All', axis=0).drop('All', axis=1)
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'city_eduction_chart.html')
        bar = Bar(init_opts=opts.InitOpts(width="60%"))
        bar.add_xaxis(list(city_eduction.index))
        for i in range(len(list(city_eduction.T.index))):
            bar.add_yaxis(city_eduction.T.index[i], [str(v) for v in city_eduction.T.values[i]])
        bar.set_global_opts(
            legend_opts=opts.LegendOpts(is_show=False),
            xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(rotate=-20, color='red')),
            yaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(color='red')),
        )
        bar.render(html_path)
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'city_eduction_chart')
        self.left_charts.append({'title': '前10城市的学历要求', 'name': 'city_eduction_chart'})

    def city_company_size_chart(self):
        """前10城市的企业规模"""
        city_company_size = pd.crosstab(self.frame.city,
                                      self.frame.company_size, margins=True).sort_values(by='All',
                                                                                       ascending=False)[:10]
        city_company_size = city_company_size.drop('All', axis=0).drop('All', axis=1)
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'city_company_size_chart.html')
        bar = Bar(init_opts=opts.InitOpts(width="60%"))
        bar.add_xaxis(list(city_company_size.index))
        for i in range(len(list(city_company_size.T.index))):
            bar.add_yaxis(city_company_size.T.index[i], [str(v) for v in city_company_size.T.values[i]])
        bar.set_global_opts(
            legend_opts=opts.LegendOpts(is_show=False),
            xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(rotate=-20, color='red')),
            yaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(color='red')),
        )
        bar.render(html_path)
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'city_company_size_chart')
        self.right_charts.append({'title': '前10城市的企业规模', 'name': 'city_company_size_chart'})

    def city_company_scale_chart(self):
        """前10城市的企业阶段"""
        city_company_scale = pd.crosstab(self.frame.city,
                                      self.frame.company_scale, margins=True).sort_values(by='All',
                                                                                       ascending=False)[:10]
        city_company_scale = city_company_scale.drop('All', axis=0).drop('All', axis=1)
        html_path = os.path.join(create_or_get_directory(os.path.join('report', 'single')), 'city_company_scale_chart.html')
        bar = Bar(init_opts=opts.InitOpts(width="60%"))
        bar.add_xaxis(list(city_company_scale.index))
        for i in range(len(list(city_company_scale.T.index))):
            bar.add_yaxis(city_company_scale.T.index[i], [str(v) for v in city_company_scale.T.values[i]])
        bar.set_global_opts(
            legend_opts=opts.LegendOpts(is_show=False),
            xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(rotate=-20, color='red')),
            yaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(color='red')),
        )
        bar.render(html_path)
        script_string = self.get_javascript_string(html_path)
        self.set_report_javascript(script_string, 'city_company_scale_chart')
        self.right_charts.append({'title': '前10城市的企业阶段', 'name': 'city_company_scale_chart'})

    def run(self, keyword='', save_method='file'):
        logger.info(f'郑彩生成报告, 请稍等！')
        self.read_data_to_frame(keyword, save_method)
        city_max_jobs, city_max_jobs_num = self.address_map_chart()
        # 左侧
        self.experience_pie_chart()
        self.eduction_pie_chart()
        self.character_pie_chart()
        self.address_pie_chart()
        self.city_experience_chart()
        self.city_eduction_chart()
        # 右侧
        self.company_size_bar_chart()
        self.company_scale_bar_chart()
        self.company_field_chart()
        self.company_name_chart()
        self.city_company_scale_chart()
        self.city_company_size_chart()
        # 中间
        self.salary_pie_chart()
        self.advantage_word_cloud()
        self.requirement_word_cloud()
        self.generate_report_javascript()
        self.generate_report(keyword, city_max_jobs, city_max_jobs_num)
        import webbrowser
        base_dir = os.path.dirname(__file__)
        webbrowser.open_new(os.path.join(base_dir, 'report', 'report.html'))


if __name__ == '__main__':
    try:
        configure_file = sys.argv[1]
    except:
        configure_file = 'configures/configure.yml'
    configures = yaml_configure_parser(configure_file)
    mongo_db_configures = configures.get('mongo_db', {})
    visualize_configures = configures.get('visualize', {})

    data_visualize = DataVisualize()
    data_visualize.run(keyword=visualize_configures.get('keyword', ''),
                       save_method=visualize_configures.get('save_method', 'file'))



