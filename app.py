from flask import Flask
from controllers.hello_controller import hello_blueprint

app = Flask(__name__)

# Register the blueprint
app.register_blueprint(hello_blueprint)

if __name__ == '__main__':
    app.run(debug=True)