from flask import Flask, render_template, request, redirect, url_for, session, flash
import json
app = Flask(__name__)
app.secret_key = 'your_secret_key'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():

    return render_template('register.html')

@app.route("/cabinet")
def cabinet():
    return render_template("cabinet.html")

if __name__ == '__main__':
    app.run(debug=True)