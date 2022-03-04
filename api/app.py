from flask import Flask
from src.routes import api
from flask_cors import CORS


def create_app(config_file=None):
    app = Flask(__name__)

    app.config.from_pyfile(config_file)
    CORS(app)

    from src.extensions import mongodb_client
    mongodb_client.init_app(app)

    app.register_blueprint(api, url_prefix='/v1')

    return app


if __name__ == '__main__':
   
    port = 8000
    app = create_app('src/settings.py')
    app.run(host='0.0.0.0', port=port, debug=True)
