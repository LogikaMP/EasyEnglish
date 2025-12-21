let cabinet_user = localStorage.getItem("user")
document.querySelector(".user-name").innerHTML = cabinet_user
let btns = document.querySelectorAll(".menu-item")
function del_bg_btns(){
    for(let btn of btns){
        btn.style.background = "transparent"
    }
}
for(let btn of btns){
    btn.addEventListener("click", function(){
        del_bg_btns()
        this.style.background = "#073174ff"
        let file = "/static/cards" + this.id + ".html"
        fetch(file).then(function(res){
            return res.text()
        }).then(function(html){
            document.querySelector(".content-area").innerHTML = html
        })
    })
}
document.querySelector(".btn-logout").addEventListener("click", function(){
    localStorage.setItem("user", "")
    window.location.assign("/login")
})