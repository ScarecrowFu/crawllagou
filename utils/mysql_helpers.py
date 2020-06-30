import csv
import MySQLdb
import MySQLdb.cursors
import shutil


class MySQLHelper(object):
    def __init__(self, db,  db_username, db_password, db_host='127.0.0.1', db_port='3306'):
        self.db = db
        self.db_username = db_username
        self.db_password = db_password
        self.db_host = db_host
        self.db_port = db_port
        self.conn = self.connect_db()

    def connect_db(self):
        conn = MySQLdb.connect(host=self.db_host, user=self.db_username, passwd=self.db_password, connect_timeout=10,
                               cursorclass=MySQLdb.cursors.DictCursor, charset="utf8")
        return conn

    def connect_close(self):
        self.conn.close()

    def insert_one(self):
        cursor = self.conn.cursor()
        db_sql = "SELECT * FROM {}.data_system_sample;".format(self.db)
        cursor.execute(db_sql)
        samples = cursor.fetchall()
        cursor.close()
        return samples

    def find_one(self):
        cursor = self.conn.cursor()
        db_sql = "SELECT * FROM {}.data_system_libdata;".format(self.db)
        cursor.execute(db_sql)
        libraries = cursor.fetchall()
        cursor.close()
        return libraries