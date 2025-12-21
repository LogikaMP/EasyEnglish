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
<<<<<<< HEAD
    if request.method == ('POST'):
        new_user = request.get_json
        with open('/static/data/user.json', 'r')as f:
            all_users = json.load(f)
        all_users.update(new_user)
        with open('/static/data/user.json', 'w')as f:
            json.dump(all_users, f)
        return 'ok'
=======
    if request.method == "POST":
        new_user = request.get_json()
        with open("static/data/user.json", "r")as f:
            all_users = json.load(f)
        all_users.update(new_user)

        with open("static/data/user.json", "w",)as f:
            json.dump(all_users, f)
        return "ok"


>>>>>>> 967d631ab4fc2f14a033cac7736fb788ce240b6a
    return render_template('register.html')

@app.route("/cabinet")
def cabinet():
    return render_template("cabinet.html")

if __name__ == '__main__':
    app.run(debug=True)