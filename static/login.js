let all_user 
fetch("/static/data/user.json")
  .then(response => response.json())
  .then(data => {
    all_user = data;
  });

  let emeilInput = document.getElementById("email").value 
  let passwortInput = document.getElementById("password").value 

  document.querySelector(".btn-login").addEventListener("click",function(){
    for (let user in all_user){
        if (all_user[user].email === emeilInput && all_user[user].password === passwortInput){
        window.location.esigen("/cabinet")
        }
        else{
            document.querySelector(".error").innerHTML = "Невірний логін чи пароль"
        }
    }
})