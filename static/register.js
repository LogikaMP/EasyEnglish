let all_user;

fetch("/static/data/user.json")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        all_user = data;
    });

let btn = document.querySelector(".btn-login");

btn.addEventListener("click", function(){

    let email = document.getElementById("email2").value;
    let password = document.getElementById("password2").value;

    if(email === "" || password === ""){
        document.querySelector(".error").innerHTML = "Заповніть всі поля";
        return;
    }

    // якщо такий користувач вже є
    if(all_user[email]){
        document.querySelector(".error").innerHTML = "Такий користувач вже існує";
        return;
    }

    // додаємо нового користувача
    all_user[email] = password;

    // зберігаємо в localStorage (як у тебе і було по логіці)
    localStorage.setItem("user", email);

    // перехід в кабінет
    window.location.assign("/cabinet");
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".logo-form");

    if (form) {
        setTimeout(() => {
            form.classList.add("show");
        }, 300);
    }
});
