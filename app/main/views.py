#coding:utf-8
from flask import render_template, session, redirect, url_for, current_app
from . import main
import json,os,re
from pandas import DataFrame,Series
import pandas as pd
import pygal
import datetime,jieba.analyse
#
# basedir = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
#
#
#
# path = basedir+"/spiders/jsons/infos.json"
# datas = []
# for line in open(path):
#     try:
#         datas.append(json.loads(line))
#     except:
#         continue
#
# frame = DataFrame(datas)
#
# def get_salary_count():
#     kd = frame.salary.value_counts()
#     pie_chart = pygal.Pie()
#     pie_chart.title = u'技术类薪酬分布'
#     for ind, num in kd.iteritems():
#         pie_chart.add("%s:%s" % (ind, num), num)
#     return pie_chart.render_data_uri()
#
# def get_kd_count():
#     kd = frame.kd.value_counts()
#     pie_chart = pygal.Pie()
#     pie_chart.title = u'技术类职位数量分布'
#     for ind, num in kd.iteritems():
#         pie_chart.add("%s:%s" % (ind, num), num)
#     return pie_chart.render_data_uri()
#
# def get_city_experience():
#     city_experience = pd.crosstab(frame.city,frame.experience,margins=True).sort_values(by='All',ascending=False)[:11]
#     city_education = city_experience.drop('All',axis=0).drop('All',axis=1)
#     ce_chart = pygal.Bar()
#     ce_chart.title = u'前十个地区对工作经验的要求'
#     ce_chart.x_labels = city_education.index
#     for i in range(len(list(city_education.T.index))):
#         ce_chart.add(city_education.T.index[i], city_education.T.values[i])
#     return ce_chart.render_data_uri()
#
#
# def get_company_count():
#     kd = frame.company.value_counts()[:20]
#     pie_chart = pygal.Pie(inner_radius=.4)
#     pie_chart.title = u'技术类前20公司招聘职位数量'
#     for ind, num in kd.iteritems():
#         pie_chart.add("%s:%s" % (ind, num), num)
#     return pie_chart.render_data_uri()
#
#
# def get_city_count():
#     city = frame.city.value_counts()[:20]
#     pie_chart = pygal.HorizontalBar()
#     pie_chart.title = u'技术类20地区招聘数量'
#     for cit,num in city.iteritems():
#         pie_chart.add("%s:%s" % (cit,num), num)
#     return pie_chart.render_data_uri()
#
#
# def get_city_phase():
#     city_pahse = pd.crosstab(frame.city,frame.phase,margins=True).sort_values(by='All',ascending=False)[:11]
#     city_pahse = city_pahse.drop('All',axis=0).drop('All',axis=1)
#     funnel_chart = pygal.StackedBar()
#     funnel_chart.title = u'技术类前十个地区公司发展规模'
#     funnel_chart.x_labels = city_pahse.index
#     for i in range(len(list(city_pahse.T.index))):
#         funnel_chart.add(city_pahse.T.index[i], city_pahse.T.values[i])
#     return funnel_chart.render_data_uri()
#
# def get_industry_count():
#     industry = frame.industry.value_counts()[:20]
#     pie_chart = pygal.Pie()
#     pie_chart.title = u'技术类前20行业领域'
#     for ind,num in industry.iteritems():
#         pie_chart.add("%s:%s" % (ind,num), num)
#     return pie_chart.render_data_uri()
#
#
# def get_city_education():
#     city_education = pd.crosstab(frame.city,frame.education,margins=True).sort_values(by='All',ascending=False)[:11]
#     city_education = city_education.drop('All',axis=0).drop('All',axis=1)
#     ce_chart = pygal.Bar()
#     ce_chart.title = u'技术类前十个地区对学历的要求'
#     ce_chart.x_labels = city_education.index
#     for i in range(len(list(city_education.T.index))):
#         ce_chart.add(city_education.T.index[i], city_education.T.values[i])
#     return ce_chart.render_data_uri()
#
#
# def get_python_guangzhou():
#     frame2 = frame[(frame.kd == 'Python') &(frame.city == u'广州') ]
#     cframe = [v for k, v in frame2.to_dict(orient='index').items()]
#     pattern = r'\d{4}-\d{2}-\d{2}'
#     for c in cframe:
#         if re.match(pattern, c['published']):
#             pass
#         else:
#             c['published'] = datetime.datetime.utcnow().strftime("%Y-%m-%d")
#     df = DataFrame(cframe)
#     df['published'] = pd.to_datetime(df['published'])
#     mask = (df['published'] > '2016-04-01') & (df['published'] <= '2016-05-02')
#     dataframe = df.loc[mask]
#     jobframe = pd.crosstab(dataframe.experience, frame.salary, margins=True).sort_values(by='All', ascending=False)
#     jobframe = jobframe.drop('All', axis=0).drop('All', axis=1)
#     pie_chart = pygal.StackedBar()
#     pie_chart.title = u'广州（python薪酬分布）'
#     pie_chart.x_labels = jobframe.index
#     for cit, num in jobframe.iteritems():
#         pie_chart.add("%s" % (cit), num)
#     return pie_chart.render_data_uri()
#
#
# def get_key_word():
#     jieba.analyse.set_stop_words(basedir+"/spiders/jsons/words.txt")
#     data,str = [],''
#     for content in frame['description']:
#         try:
#             str = "".join(content)
#         except:
#             print "description is not avaliable"
#         data.append(str)
#     tags = jieba.analyse.extract_tags("".join(data).lower(), topK=50, withWeight=True)
#     des_jieba = []
#     for wd, weight in tags:
#         print wd, weight
#         des_jieba.append({wd: weight})
#     pie_chart = pygal.Pie()
#     pie_chart.title = u'职位描述关键字比重'
#     for des in des_jieba:
#         pie_chart.add(des.keys()[0], des.values()[0])
#     return pie_chart.render_to_png(os.path.dirname(__file__) + '/chart/des.png')
#
# def get_key_tag():
#     jieba.analyse.set_stop_words(basedir+"/spiders/jsons/words.txt")
#     # seg_list = jieba.cut(data[0], cut_all=False)
#     # print("Full Mode: " + "/ ".join(seg_list))  # 全模式
#     data,str = [],''
#     for content in frame['tag']:
#         try:
#             str = "".join(content)
#         except:
#             print "tag is not avaliable"
#         data.append(str)
#     tags = jieba.analyse.extract_tags("".join(data).lower(), topK=20, withWeight=True)
#     des_jieba = []
#     for wd, weight in tags:
#         print wd, weight
#         des_jieba.append({wd: weight})
#     pie_chart = pygal.Pie()
#     pie_chart.title = u'职位诱惑关键字比重'
#     for des in des_jieba:
#         pie_chart.add(des.keys()[0], des.values()[0])
#     return pie_chart.render_data_uri()

@main.route('/', methods=['GET', 'POST'])
def index():
    # key_tag = get_key_tag()
    # python_guangzhou = get_python_guangzhou()
    # education = get_city_education()
    # industry_count = get_industry_count()
    # city_phase = get_city_phase()
    # city_count = get_city_count()
    # company_count = get_company_count()
    # city_experience = get_city_experience()
    # kd_count = get_kd_count()
    # salary_count = get_salary_count()
    return render_template('index.html',
                           # key_tag=key_tag,
                           # python_guangzhou=python_guangzhou,
                           # education=education,industry_count=industry_count,
                           # city_phase=city_phase,city_count=city_count,
                           # company_count=company_count,city_experience=city_experience,
                           # kd_count=kd_count,salary_count=salary_count
                           )

