from flask import Flask, render_template, request, redirect, url_for, session, flash
app = Flask(__name__)
app.secret_key = 'your_secret_key'
import json

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Handle registration logic here
        new_user = request.get_json()
        with open('/static/data/user.json', 'r') as f:
            all_users = json.load(f)
            all_users.update(new_user)
            with open('/static/data/user.json', 'w') as f_w:
                json.dump(all_users, f_w)
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/cabinet')
def cabinet():
    return render_template('cabinet.html')

if __name__ == '__main__':
    app.run(debug=True)
