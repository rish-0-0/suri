import os
from flask import Flask, request, jsonify, send_file, send_from_directory


app = Flask(__name__, static_folder='suri/build')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index():
	if path != '' os.path.exists(app.static_folder + '/' + path):
		return send_from_directory(app.static_folder, path)
	return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/upload', methods=['POST'])
def upload():
	return jsonify({
		"success": True,
		"message": "Sup"
		})

@app.route('/api/download', methods=['GET'])
def download():
	path='results.csv'


if __name__ == '__main__':
	app.run(use_reloader=True, port=5000, threaded=True)