# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class CrawldetailsItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    kd = scrapy.Field()
    title = scrapy.Field()
    description = scrapy.Field()
    tag = scrapy.Field()
    company = scrapy.Field()
    city = scrapy.Field()
    salary = scrapy.Field()
    experience = scrapy.Field()
    education = scrapy.Field()
    url = scrapy.Field()
    address = scrapy.Field()
    industry = scrapy.Field()
    scale = scrapy.Field()
    phase = scrapy.Field()
    published = scrapy.Field()
