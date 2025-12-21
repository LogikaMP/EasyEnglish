let all_user
fetch("/static/data/user.json").then(function(res){
    return res.json()
}).then(function(data){all_user = data
    })
    
let btn = document.querySelector(".btn-login")
btn.addEventListener("click",function(){
    let email = document.getElementById("email").value 
    let password= document.getElementById("password").value 
    for(let user in  all_user){
        if(email == user && password == all_user[user]){
            // НЕМЕНІ ДОДАТИ АНІМАЦІЮ АВТОРИЗАЦІЯ УСПІШНА 
            localStorage.setItem("user", email)
            window.location.assign("/cabinet")
        }
    }
    document.querySelector(".error").innerHTML = "Перевірте логін і пароль"

})