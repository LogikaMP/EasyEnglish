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

    // перевірка чи існує користувач
    let exist = all_users.some(user => user.email === email)

    if (exist) {
        error.innerHTML = "Користувач з таким email-ом вже існує"
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
            // зберігаємо email локально і показуємо анімацію
            localStorage.setItem("user", email)
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
