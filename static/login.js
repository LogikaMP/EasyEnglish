let btn = document.querySelector(".btn-login");
let errorBox = document.querySelector(".error");

btn.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: email,
            password: password
        })
    })
    .then(res => res.text())
    .then(data => {
        if (data === "ok") {
            showSuccess();
            setTimeout(() => {
                window.location.href = "/cabinet";
            }, 1500);
        } else {
            errorBox.innerText = "Перевірте логін і пароль";
        }
    });
});
function showSuccess() {
    errorBox.innerHTML = 
        <div class="success">
            Авторизація успішна
        </div>
    ;
}
