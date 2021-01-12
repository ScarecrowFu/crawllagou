
# 该项目已不再维护


-----------

# 前提说明

1.拉勾网搜索页面一般都只展示30页、每页15个职位信息，一次搜索约450条

2.拉勾网反爬虫机制更新频繁，直接解析Ajax请求容易触发反爬虫机制（提示：”msg”:”您操作太频繁,请稍后再访问”），浏览器也无法访问。

3.解析这个Ajax请求前发起GET请求获取当前会话session, 可在某程度上解决第2点, 但在频繁请求后仍会触发反爬虫机制, 被Ban IP

# 开发设计

1.可构建大量代理IP池, 通过不断更换代理IP的方式, 解析Ajax请求进行爬取

2.亦可使用 selenium 浏览器自动化测试框架驱动谷歌浏览器, 模拟人使用浏览器查看网页的过程获取数据

3.此程序使用第2点解决方案, 使用 selenium 模拟人操作

4.搜索页和详情页请求过快便会跳出来登录页面, 连续请求10个详情页也会弹出登录页面, 因此此程序需要登录

5.在第一次登录后将保存登录cookies, 在cookies未过期前无需再次登录

6.可配置保存数据为CSV文件或者保存在MongoDB数据库

7.运行数据可视化程序后, 生成HTML格式的文件作为展示

# 功能实现

1.根据需求编写配置文件, 配置文件具体说明查看 configures/configure.yml 或如下 "配置文件说明"

2.启动爬虫, 进行登录, 首先将读取cookies文件, 若无效, 将进行登录, 否则无需再次登录

2.登录过程可能会出现图片验证码, 当前需要手动处理验证后按回车键继续

3.登录后获取拉勾网的城市分类列表

4.若已配置搜索关键字, 则将根据关键字, 搜索每个城市分类下的职位

5.若搜索关键字为空. 代表按照左侧导航栏分类进行全网爬取

6.获取职位详情的请求时, 同一浏览器超过一定次数, 会跳转至安全验证

7.为解决第6点, 获取职位详情的请求, 将启动新的浏览器, 5次请求后关闭重新启动新的浏览器, 详情浏览器将默认运行于后台, 不受配置headless影响

7.数据爬取完毕后, 运行可视化程序, 生成可视化报告文件

# 配置文件说明

```yaml
##################基础配置######################################################

# MongoDB 配置, 若爬虫配置save_method为database, 需要设置MongoDB
mongo_db:
  host:  # 服务器
  port:   27017  # 端口
  user:     # 用户
  password:   # 密码
  min_pool_size:  10  # 最小连接数
  max_pool_size:  1000  # 最大连接数
  wait_queue_timeout_ms:  5000  # 连接池需要等待
  socket_timeout_ms:  20000  # 数据库操作等待超时时间

# selenium 配置, 仅为谷歌浏览器配置
webdriver_option:
  headless: true  # headless 是否在后台运行
  proxy_server:   # proxy_server 代理服务器
  executable_path :  /home/alan/env/chromedriver  # 谷歌浏览器驱动所在路径


###################爬虫配置######################################################

# 爬虫配置
lagou:
  keyword:  java # 搜索关键字, 为空则代表按照左侧导航栏分类进行全网爬取
  username:  # 拉勾登录账号
  password:   # 拉勾登录密码
  sleep_interval: 1 # 关键动作时间的时间间隔, 时间尽量不要太快, 避免触发反爬虫机制
  save_method: file  # 保存方法, 分别为file, mysql, mongodb
  save_file_path: lagou_data  # 若保存为 file, 指定具体文件保存路径


# 可视化配置
visualize:
  keyword:  java # 关键字, 指定数据分类， 为空则代表按照统计所有数据
  save_method: file  # 获取数据的方法, 分别为file, mysql, mongodb

```

# 使用方法

1.配置文件 configure.yml

2.启动爬虫

```shell script
python spiders.py
```

or 
```shell script
python spiders.py configures/configure.yml
```

3.生成可视化报告文件

```shell script
python visualize_data.py
```

# todo list

[ ] 1.完善爬虫数据保存方式(MYSQL/MONGODB), 目前仅支持以CSV文件形式保存

[ ] 2.完善数据可视化报告从不同保存方式中获取, 目前仅支持从CSV文件形式获取

[ ] 3.编写Web端, 以网站形式, 在线生成可视化报告, 目前仅支持以脚本形式生成本地HTML报告文件
