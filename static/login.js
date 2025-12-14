let all_users
fetch('/static/data/users.json').then(function(res){
    return res.json()
})  
    .then(function(data){
        all_users = data;
});
let btn = document.querySelector('.btn-login'); 
btn.addEventListener('click', function(){
    let email = document.getElementById('#email').value;
    let password = document.querySelector('#password').value;
    for (let user in all_users ){
        if (email == user && password == all_users[user]){
            //додати анімацію успішного входу
            window.location.assign('/cabinet');
    }
        }
})