let all_users
fetch('/static/data/user.json').then(function(res){
    return res.json()
}).then(function(data){
    all_users = data
})

let btn = document.querySelector('.btn-login')
btn.addEventListener('click',function(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let exists = false
    for (let user in all_users){
        if(email == user ){
            // додати анімацію успішной авторизації
            exists = true
        }}
    if(!exists){
        document.querySelector('.error').innerText = "Невірний email або пароль"
    } 
    else {
        let user = {[email]: password}
        fetch ("/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(function(res){
            if(res.status == 200){
                // додати анімацію успішной реєстрації
                window.location.assign('/cabinet')
            }
            else{
                document.querySelector('.error').innerText = "Помилка реєстрації. Спробуйте ще раз."
            }
        })
    }
})

