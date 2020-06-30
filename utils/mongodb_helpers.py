import pymongo


class MonGoDBHelper(object):
    """MonGo封装类"""
    def __init__(self, host="127.0.0.1", port=27017, user=None, password=None,
                 min_pool_size=10, max_pool_size=1000,
                 wait_queue_timeout_ms=5000, socket_timeout_ms=20000,
                 database='test'):
        """
        :param host: 服务器
        :param port: 端口
        :param database: 数据库
        :param user: 用户
        :param password: 密码
        :param min_pool_size: 最小连接数(活跃)
        :param max_pool_size: 最大连接数
        :param wait_queue_timeout_ms: 连接池需要等待
        :param socket_timeout_ms: 数据库操作等待时间
        """
        config = {'host': host, 'port': port}
        if user:
            config['user'] = user
        if password:
            config['password'] = password
        if min_pool_size:
            config['minPoolSize'] = min_pool_size
        if max_pool_size:
            config['maxPoolSize'] = max_pool_size
        if wait_queue_timeout_ms:
            config['waitQueueTimeoutMS'] = wait_queue_timeout_ms
        if socket_timeout_ms:
            config['socketTimeoutMS'] = socket_timeout_ms
        self.client = pymongo.MongoClient(**config)
        self.db = self.client[database]

    def init_db(self, database):
        """获取数据库"""
        self.db = self.client[database]

    def insert_one(self, collection, data):
        """直接使用insert(), 也可以插入一条和插入多条 不推荐, 明确区分比较好"""
        res = self.db[f'{collection}'].insert_one(data)
        return res

    def insert_many(self, collection,  data):
        """批量插入数据, data 为对象组成的数组"""
        res = self.db[f'{collection}'].insert_many(data)
        return res

    def find_one(self, collection, query, projection=None):
        """
        查找一条数据
        """
        res = self.db[f'{collection}'].find_one(query, projection)
        return res

    def find_many(self, collection,  query, projection=None):
        """查找所有数据"""
        results = self.db[f'{collection}'].find(query, projection, no_cursor_timeout=True)
        res = []
        for result in results:
            res.append(result)
        return res

    def find_many_paging(self, collection,  query, projection=None,
                         not_page=False, page_size=10, page=1, ordering='', search=''):
        """分页查询"""
        if not_page:
            results = self.find_many(collection, query, projection)
            return results, len(results)
        if search:
            query['$text'] = {'$search': search}
        results = self.db[f'{collection}'].find(query, projection, no_cursor_timeout=True)
        if ordering:
            mongo_ordering = []
            ordering_fields = ordering.split(',')
            for ordering_field in ordering_fields:
                if '-' in ordering_field:
                    mongo_ordering.append((ordering_field.replace('-', ''), pymongo.DESCENDING))
                else:
                    mongo_ordering.append((ordering_field.replace('-', ''), pymongo.ASCENDING))
            results = results.sort(mongo_ordering)
        results = results.skip((page-1)*page_size).limit(page_size)
        data_total = results.count()
        res = []
        for result in results:
            res.append(result)
        return res, data_total

    def update_one(self, collection, query, data):
        """修改一条数据"""
        res = self.db[f'{collection}'].update_one(query, {"$set": data})
        return res

    def update_many(self, collection, query, data):
        """修改多条数据 """
        res = self.db[f'{collection}'].update_many(query, {"$set": data})
        return res

    def delete_many(self, collection,  query):
        """删除多条"""
        res = self.db[f'{collection}'].delete_many(query)
        return res

    def delete_one(self, collection,  query):
        """删除一条"""
        res = self.db[f'{collection}'].delete_one(query)
        return res


if __name__ == '__main__':
    pass


