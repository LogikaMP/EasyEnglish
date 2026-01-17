from flask import Flask, render_template, request, redirect, url_for, session
import json
from functools import wraps

app = Flask(__name__)
app.secret_key = 'your_secret_key'


# --- Декоратор для захисту сторінок ---
def login_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        if session.get("user") is None:
            return redirect(url_for("login"))
        return f(*args, **kwargs)
    return wrapper


@app.route('/')
def index():
    return render_template(
        'index.html',
        is_auth=session.get("user") is not None
    )


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")

        with open("static/data/user.json", "r") as f:
            users = json.load(f)

        if username in users and users[username] == password:
            session["user"] = username
            return "ok"

        return "error"

    return render_template('login.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == "POST":
        new_user = request.get_json()

        with open("static/data/user.json", "r") as f:
            all_users = json.load(f)

        all_users.update(new_user)

        with open("static/data/user.json", "w") as f:
            json.dump(all_users, f)

        with open("static/data/progress.json", "r") as f:
            progress = json.load(f)

        name = list(new_user.keys())[0]
        progress[name] = {
            "word": [0, 0, 0],
            "audio": [0, 0, 0],
            "grammar": [0, 0, 0],
            "verbs": [0, 0, 0],
        }

        with open("static/data/progress.json", "w") as f:
            json.dump(progress, f)

        return redirect(url_for("index"))

    return render_template('register.html')


@app.route("/cabinet")
@login_required
def cabinet():
    return render_template("cabinet.html")


@app.route("/words")
@login_required
def words():
    return render_template("cards/word.html")


@app.route("/audio")
@login_required
def audio():
    return render_template("cards/audio.html")


@app.route("/grammar")
@login_required
def grammar():
    return render_template("cards/grammar.html")


@app.route("/verbs")
@login_required
def verbs():
    return render_template("cards/verbs.html")


@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("index"))


if __name__ == '__main__':
    app.run(debug=True)
