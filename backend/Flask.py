from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from main import fetch, inputData

flask_practice = Flask(__name__)
cors = CORS(flask_practice, origins="*", supports_credentials=True)
flask_practice.config['CORS_HEADERS'] = 'Content-Type'

@flask_practice.route("/showData")
@cross_origin()
def fetch_data():
    outputA = fetch()
    return outputA

@flask_practice.route("/insert", methods=["POST"])
@cross_origin()
def insert_data():
    if request.method == "POST":
        data = request.get_json()
        query = data.get('query')
        outputB = inputData(query=query)
        return outputB


if __name__ == "__main__":
    flask_practice.run(debug=True)