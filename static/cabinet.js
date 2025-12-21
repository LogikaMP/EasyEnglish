let cabinet_user = localStorage.getItem("user")
document.querySelector(".user-name").innerHTML = cabinet_user
// Тут можна додати більше функціоналу для кабінету користувача
let btns = document.querySelectorAll(".menu-item")
function del_bg_btns(){
    for (let btn of btns){
        btn.style.backgroundColor = "transparent"
    }
}
for (let btn of btns){
    btn.addEventListener("click", function(){
        del_bg_btns()
        this.style.backgroundColor = "#123a7a"
        let file = "/static/cards/" + this.id + ".html"
        fetch(file).then(function(res){
            return res.text()
        }).then(function(html){
            document.querySelector(".content-area").innerHTML = html
            let script = document.createElement("script")
            script.src = "/static/" + this.id + ".js"
            script.defer = true
            document.body.appendChild(script)
        })
    })
}
document.querySelector(".btn-log-out").addEventListener("click", function(){
    localStorage.setItem("user", "")
    window.location.assign("/login")
})