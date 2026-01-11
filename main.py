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
    if request.method == 'POST':
        # Here you would normally handle registration logic
        new_user = request.get_json()
        with open('static/data/user.json', "r") as file:
            users = json.load(file)
        users.update(new_user)
        with open('static/data/user.json', "w") as file:
            json.dump(users, file)
        with open("static/data/progress.json", "r") as file:
            progress = json.load(file)
        name = list(new_user.keys())[0]
        new_progress = {name: {
            "word": [0,0,0],
            "grammar": [0,0,0],
            "verbs": [0,0,0],
            "audio": [0,0,0],
        }}
        progress.update(new_progress)
        with open("static/data/progress.json", "w") as file:
            json.dump(progress, file)
    return render_template('register.html')

@app.route("/cabinet", methods=['GET', 'POST'])
def cabinet():
    if request.method == 'POST':
        # Here you would normally handle login logic
        progress = request.get_json()
        with open("static/data/progress.json", "w") as file:
            json.dump(progress, file)
        return "ok"
    return render_template("cabinet.html")

if __name__ == '__main__':
    app.run(debug=True)