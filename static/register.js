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
    let exist = false
    for (let user in all_users){
        if(email == user == all_users){
            // додати анімацію успішной авторизації
            exist = true
        }
    }
    if (exist){    document.querySelector('.error').innerHTML = "Такий користувач вже існує"}

    else{
        let user = {[email]: password}
        fetch("/register", {
            method: 'POST',
            Headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(function(res){
            return res.text()
        }).then(function(data){

            window.location.assign('/cabinet')
        })
    }


})
