import os
from flask import Flask, request, jsonify, send_file, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder='suri/build')
CORS(app)

@app.route('/api/upload', methods=['POST'])
def upload():
	if 'file' not in request.files:
		return jsonify({
			"success": False,
			"message": "No File."
			})
	file = request.files['file']
	filename = 'data.csv'
	file.save(os.path.join(os.getcwd(), filename))
	# import your file and call your function here
	print("File Saved Successfully")
	if (request.args.get('category') == 'k-means'):
		# status = yourmodel.test(...whatever)
		# if status:
			# return jsonify({ 'success' : True })
		# return jsonify({ 'success' : False })
		pass
	# status = yourmodel.test(...whatever)
	# if status:
		# return jsonify({ 'success' : True })
	# return jsonify({ 'success' : False })
	

@app.route('/api/download', methods=['GET'])
def download():
	path='results.csv'
	return send_from_directory(directory=os.getcwd(),filename=path)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
	if path != '' and os.path.exists(app.static_folder + '/' + path):
		return send_from_directory(app.static_folder, path)
	return send_from_directory(app.static_folder, 'index.html')




if __name__ == '__main__':
	app.run(use_reloader=True, port=5000, threaded=True)