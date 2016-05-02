from flask import Flask
from flask.ext.bootstrap import Bootstrap

bootstrap = Bootstrap()



def create_app():
    app = Flask(__name__)
    app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

    bootstrap.init_app(app)


    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app