fetch("/static/data/user.json")
    .then(res => res.json())
    .then(users => {

        document.querySelector(".login-form").addEventListener("submit", function(e){
            e.preventDefault();

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if(users[email] && users[email] === password){
                localStorage.setItem("user", email);
                window.location.href = "/cabinet";
            } else {
                document.querySelector(".error").innerText = "Перевірте логін і пароль";
            }
        });

    });
