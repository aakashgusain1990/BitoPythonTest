from flask import Blueprint, jsonify
from services.hello_service import get_hello_message

hello_blueprint = Blueprint('hello', __name__)

@hello_blueprint.route('/hello', methods=['GET'])
def hello():
    message = get_hello_message()
    return jsonify(message=message)