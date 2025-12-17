let all_user
fetch("/static/data/user.json").then(function(res){
    return res.json()
}).then(function(data){
    all_user = data
})

let btn = document.querySelector(".btn-login")
btn.addEventListener("click",function(){
    let email = document.getElementById("email").value 
    let password = document.getElementById("password").value 
    let exist = false
    for(let user in all_user){
        if(email == user ){
            // додати анімацію успішну анімацію
            exist = true
        }
    }
    if (exist){
        document.querySelector(".error").innerHTML = "Перевірте логін та пароль"
    }
    else{
        let user = {[email]:password}
        fetch("/register",{
           nethod:"POST",
           headers: {
            "Conten-Type": "application/json"
           },
           body: JSON.stringify(user)
        }).then(function(res){
            return res.text()
        }).then(function(data){
            window.location.assign("/cabinet")
        })
    }
    
}) 