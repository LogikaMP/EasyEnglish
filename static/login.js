let all_users = []

// завантаження користувачів
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
    let success = false

    for (let user of all_users) {
        if (user.email === email && user.password === password) {
            success = true
            localStorage.setItem("user", email)
            break
        }
    }

    if (success) {
        animeSuccess()
    } else {
        error.innerHTML = "Перевірте логін і пароль"
        animeError(error)
    }
})

function animeError(el) {
    let pos = 0
    let interval = setInterval(() => {
        pos = pos === 0 ? 10 : -10
        el.style.transform = `translateX(${pos}px)`
    }, 50)

    setTimeout(() => {
        clearInterval(interval)
        el.style.transform = 'translateX(0)'
    }, 300)
}

function animeSuccess() {
    let overlay = document.querySelector('.success-overlay')
    let box = overlay.querySelector('.success-box')

    overlay.style.display = 'flex'
    overlay.style.opacity = '0'
    box.style.transform = 'scale(0.5)'

    let opacity = 0
    let scale = 0.5

    let interval = setInterval(() => {
        opacity += 0.05
        scale += 0.05

        overlay.style.opacity = opacity
        box.style.transform = `scale(${scale})`

        if (opacity >= 1) {
            clearInterval(interval)
        }
    }, 20)

    setTimeout(() => {
        window.location.assign('/cabinet')
    }, 2000)
}
