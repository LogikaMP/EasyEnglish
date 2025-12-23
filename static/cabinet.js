let  cabinet_user =localStorage.getItem("user")
document.querySelector(".user-name").innerHTML = cabinet_user
let btns = document.querySelectorAll(".menu-item")
function de_dg_btns(){
    for (let btn of btns){
        btn.style.background = "transparent"
    }
}
for(let btn  of btns) {
    btn.addEventListener("click", function(){
        del_bg_btns()
        this.style.background = "#0077b6"
        let file = "/static/cards/" + this.id + ".html" 
        fetch("file").then(function(res){
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
    window.localStorage.assing("/login")
})

