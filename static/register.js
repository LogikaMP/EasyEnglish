document.querySelector(".btn-login").addEventListener("click", function(){

    let email = document.getElementById("email2").value.trim();
    let password = document.getElementById("password2").value.trim();

    if(email === "" || password === ""){
        document.querySelector(".error").innerHTML = "Заповніть всі поля";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if(users[email]){
        document.querySelector(".error").innerHTML = "Такий користувач вже існує";
        return;
    }

    users[email] = password;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", email);

    window.location.assign("/cabinet");
});
