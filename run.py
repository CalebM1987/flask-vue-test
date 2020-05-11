from flask_app import app

if __name__ == '__main__':
    import json
    import os

    # read config file to get localhost flask port
    config_file = os.path.abspath('./config.json')
    with open(config_file, 'r') as f:
        config = json.load(f)
   
    # run the app
    app.run(port=config.get('flaskPort', 5005), debug=True)