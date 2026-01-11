function loadWordModule(){
function updateProgress(){
    document.querySelector(".right").innerHTML = progress[cabinet_user]["word"][0]
    document.querySelector(".wrong").innerHTML = progress[cabinet_user]["word"][1]
    document.querySelector(".total").innerHTML = progress[cabinet_user]["word"][2]

}
let ln1 = "en"
let ln2 = "ua"
updateProgress()
let index = 0
function load_task(){
    document.querySelector(".word.current").innerHTML = tasks[index][ln1] 

}
    load_task()
    document.querySelector(".test.button.word").addEventListener("click", function(){
        if (ln1 == "en"){
            ln1 = "ua"
            ln2 = "en"
            this.innerHTML = "УКР → АНГ"
            document.querySelector(".test.label.word").innerHTML = "Українською"
            load_task()
        }
        else{
            ln1 ="en"
            ln2 = "ua"
            this.innerHTML = "АНГ → УКР"
            document.querySelector(".test.label.word").innerHTML = "Англійською"
            load_task()
        }

    })
    document.querySelector(".test.button.primary.word").addEventListener("click", function(){
    let my_ans = document.querySelector(".test.input.word")
    let result = ""
    let right_ans = document.querySelectorAll(".word.current.right_ans")
    if (my_ans.value == tasks[index][ln2]){
        result = "correct"
        progress[cabinet_user]["word"][0] ++
    }
    else{
        result = "wrong"
        progress[cabinet_user]["word"][1]++
    }
    progress[cabinet_user]["word"][2]++
    right_ans.innerHTML = result + tasks[index][ln2]
    setTimeout(function(){
        right_ans.innerHTML = ""
        my_ans.value = ""
        index ++
        if (index >= tasks.length){
            index = 0
        }
        updateProgress()
        load_task()
    }, 1000)
})
}  


loadWordModule()