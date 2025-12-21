let all_user 
fetch("/static/data/user.json")
  .then(response => response.json())
  .then(data => {
    all_user = data;
  });

  

  document.querySelector(".btn-login").addEventListener("click",function(){
    let emeilInput = document.getElementById("email2").value 
    let passwortInput = document.getElementById("password2").value 
    for (let user in all_user){
        if (all_user[user].email === emeilInput){
        document.querySelector(".error").innerHTML = "Користувач з таким емейлом вже існує."
        }
        else{
            let new_user ={[emeilInput]: passwortInput}
           
            fetch("/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(new_user)
            }).then(response => {
                if (response.ok) {
                    window.location.assign("/cabinet")
                }})
            }
        }
    })