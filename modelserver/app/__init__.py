from flask import Flask

# application factory
def create_app():
    app = Flask(__name__)

    from .views import main_views
    app.register_blueprint(main_views.bp)
    
    return app
