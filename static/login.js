document.querySelector(".btn-login").addEventListener("click", function () {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email] && users[email] === password) {
        localStorage.setItem("user", email);
        window.location.assign("/cabinet");
    } else {
        document.querySelector(".error").innerHTML = "Перевірте логін і пароль";
    }
});
