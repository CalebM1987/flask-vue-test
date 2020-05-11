from flask import Flask
from flask_cors import CORS
import os
from .blueprints.cards import card_api

app = Flask(__name__, static_folder='static')

app.register_blueprint(card_api)
CORS(app, resources={ "*": { "origins": "*" } })

@app.route('/')
def start():
    return app.send_static_file('index.html')