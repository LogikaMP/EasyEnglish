function load_verbs(){
    function update_progress(){
    
        document.querySelector(".right").innerHTML = progress[cabinet_user]["verbs"][0]
        document.querySelector(".progress").innerHTML = progress[cabinet_user]["verbs"][1]
    }
  
    update_progress()
    let index = 0
    let task_verbs = ""
    function load_task(){
        document.querySelector(".verbs").innerHTML = tasks[index]["verb"]
        document.querySelector(".verbs.tense").innerHTML = tasks[index]["tense"]
        task_verbs = [tasks[index]["I"],tasks[index]["You"],
            tasks[index]["He/She/It"],tasks[index]["He/She/It"],tasks[index]["He/She/It"],
            tasks[index]["We"],tasks[index]["They"]]
    }
    load_task()
    
    document.querySelector(".test.button.primary.verbs").addEventListener("click", function(){
        let my_ans = document.querySelectorAll(".test.input.verbs")
        let result = ''
        let right_ans = document.querySelector(".verbs.sentence")
        if(my_ans.value == tasks[index]["en"]){
            result = "👍"
            progress[cabinet_user]["verbs"][0]++
        }else{
            result = "👎"
            progress[cabinet_user]["verbs"][1]++
        }
        progress[cabinet_user]["verbs"][2]++
        right_ans.innerHTML = result + tasks[index]["en"]+"<br>"+tasks[index]["ua"]
        setTimeout(function(){
            right_ans.innerHTML = ""
            my_ans.value = ""
            index++
            if (index >= tasks.length){
                index = 0
            }
            update_progress()
            load_task()
        }, 1000)
    })
}
load_verbs()