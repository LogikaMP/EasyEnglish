let all_user;

fetch("/static/data/user.json")
    .then(res => res.json())
    .then(data => {
        all_user = data;
    });

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector(".btn-login");

    btn.addEventListener("click", function () {
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        if (all_user[email] && all_user[email] === password) {
            localStorage.setItem("user", email);
            window.location.assign("/cabinet");
        } else {
            document.querySelector(".error").innerText = "Перевірте логін і пароль";
        }
    });

    // поява форми
    setTimeout(() => {
        document.querySelector(".logo-form").classList.add("show");
    }, 200);
});
