import os
from flask import Flask, request, jsonify, send_file, send_from_directory


app = Flask(__name__, static_folder='suri/build')

@app.route('/api/upload', methods=['POST', 'GET'])
def upload():
	return jsonify({
		"success": True,
		"message": "Sup"
		})

@app.route('/api/download', methods=['GET'])
def download():
	path='results.csv'

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
	if path != '' and os.path.exists(app.static_folder + '/' + path):
		return send_from_directory(app.static_folder, path)
	return send_from_directory(app.static_folder, 'index.html')




if __name__ == '__main__':
	app.run(use_reloader=True, port=5000, threaded=True)