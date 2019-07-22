
from flask import Flask, render_template, send_file

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html'), 200, {'Access-Control-Allow-Origin': '*'}


@app.route('/rotation.js')
def rotation():
    return render_template('rotation.js'), 200, {'Access-Control-Allow-Origin': '*'}


@app.route('/assets/markcastle/uvmap.png')
def uvmap():
    return send_file('assets/markcastle/uvmap.png'), 200, {'Access-Control-Allow-Origin': '*'}


if __name__ == '__main__':
    app.run(debug=True)
