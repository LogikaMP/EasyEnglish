let progress = {}
let tasks = {}
let  cabinet_user =localStorage.getItem("user")
document.querySelector(".user-name").innerHTML = cabinet_user
let btns = document.querySelectorAll(".menu-item")
function del_bg_btns(){
    for (let btn of btns){
        btn.style.background = "transparent"
    }
}
for(let btn  of btns) {
    btn.addEventListener("click", function(){
        del_bg_btns()
        this.style.background = "#0077b6"
        let name = this.id
        let file = "/static/cards/" + name + ".html" 
        let file_tasks = "/static/data/" + name + ".json"
        fetch(file_tasks).then(function(res){
            return res.json()
        }).then(function(data){
            tasks = data[name]
        })
        fetch("/static/data/progress.json").then(function(res){
            return res.json()
        }).then(function(data){
            progress = data
        })

        fetch(file).then(function(res){
            return res.text()
        }).then(function(html){
            document.querySelector(".content-area").innerHTML = html
            let script = document.createElement("script")
            script.src = "/static/" + name + ".js"
            script.defer = true 
            document.querySelector(".content-area").appendChild(script)
        })
    })
}
document.querySelector(".btn-log-out").addEventListener("click", function(){8
     window.location.assign("/login")
})

