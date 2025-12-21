let all_user
fetch("/static/data/user.json").then(function(res){
    return res.json()
}).then(function(data){all_user = data
    })

let btn = document.querySelector(".btn-login")
btn.addEventListener("click",function(){
    let email = document.getElementById("email").value 
    let password= document.getElementById("password").value 
    let exist = false
    for(let user in  all_user){
        if(email == user){
            // НЕМЕНІ ДОДАТИ АНІМАЦІЮ АВТОРИЗАЦІЯ УСПІШНА 
            exist = true
        }
    }
    if(exist){
        document.querySelector(".error").innerHTML = "Користувач з таким email-ом вже існує"}
    else{
        let user = {[email]:password}
        fetch("/register", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(function(res){
        return res.text()
    }).then(function(data){
        // ДОДАТИ АНІМАЦІЮ УСПІШНГО ПЕРЕХОДУ В КАБІНЕТ
        localStorage.setItem("user", email)
        window.location.assign("/cabinet")
    })
    }
    

})