function load_word(){
    function update_progress(){
        document.querySelector(".total").innerHTML = progress[cabinet_user]["word"][2]
        document.querySelector(".right").innerHTML = progress[cabinet_user]["word"][0]
        document.querySelector(".progress").innerHTML = progress[cabinet_user]["word"][1]
    }
    let ln1 = "en"
    let ln2 = "ua"
    update_progress()
    let index = 0
    function load_task(){
        document.querySelector(".word.current").innerHTML = tasks[index][ln1]
    }
    load_task()
    document.querySelector(".test.button.word").addEventListener("click", function(){
        if(ln1 == "en"){
            ln1 = "ua"
            ln2 = "en"
            this.innerHTML = "⇄ УКР → АНГ"
            document.querySelector(".test.label.word").innerHTML = "Українською:"
            load_task()
        }else{
            ln1 = "en"
            ln2 = "ua"
            this.innerHTML = "⇄ АНГ → УКР"
            document.querySelector(".test.label.word").innerHTML = "Англійською:"
            load_task()
        }
    })

    document.querySelector(".test.button.primary.word").addEventListener("click", function(){
        let my_ans = document.querySelector(".test.input.word")
        let result = ''
        let right_ans = document.querySelector(".word.current.right_ans")
        if(my_ans.value == tasks[index][ln2]){
            result = "👍"
            progress[cabinet_user]["word"][0]++
        }else{
            result = "👎"
            progress[cabinet_user]["word"][1]++
        }
        progress[cabinet_user]["word"][2]++
        right_ans.innerHTML = result + tasks[index][ln2]
        setTimeout(function(){
            right_ans.innerHTML = ""
            my_ans.value = ""
            index++
            if (index >= tasks.length){
                tasks.length = 0
            }
            update_progress()
            load_task()
        }, 1000)
    })
}
load_word()