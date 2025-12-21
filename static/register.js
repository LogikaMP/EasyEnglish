<<<<<<< HEAD
let all_users = []

// отримуємо користувачів
fetch('/static/data/user.json')
    .then(res => res.json())
    .then(data => {
        all_users = data
    })

let btn = document.querySelector('.btn-login')

btn.addEventListener('click', function () {
    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('password').value.trim()
    let error = document.querySelector('.error')

    error.innerHTML = ""

    let exist = false

    // перевірка чи існує користувач
    for (let user of all_users) {
        if (user.email === email) {
            exist = true
            break
        }
    }

    if (exist) {
        error.innerHTML = "Такий користувач вже існує"
        shakeError(error)
    } else {
        let newUser = {
            email: email,
            password: password
        }

        fetch("/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.text())
        .then(() => {
            showSuccessAnimation()
        })
    }
})


function showSuccessAnimation() {
    let overlay = document.querySelector('.success-overlay')
    let box = overlay.querySelector('.success-box')

    overlay.style.display = 'flex'
    overlay.style.opacity = '0'
    box.style.transform = 'scale(0.6)'

    setTimeout(() => {
        overlay.style.transition = 'opacity 0.4s'
        box.style.transition = 'transform 0.4s'
        overlay.style.opacity = '1'
        box.style.transform = 'scale(1)'
    }, 50)

    setTimeout(() => {
        window.location.assign('/cabinet')
    }, 2000)
}


function shakeError(el) {
    el.style.animation = 'none'
    setTimeout(() => {
        el.style.animation = 'shake 0.3s'
    }, 10)
}
=======
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
>>>>>>> 967d631ab4fc2f14a033cac7736fb788ce240b6a
