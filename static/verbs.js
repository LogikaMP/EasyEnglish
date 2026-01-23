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
        document.querySelector(".verbs.tense").innerHTML = tasks[index]["Tense"]
        task_verbs = [tasks[index]["I"],tasks[index]["You"],
            tasks[index]["He/She/It"],tasks[index]["He/She/It"],tasks[index]["He/She/It"],
            tasks[index]["We"],tasks[index]["They"]]
    }
    load_task()
    
    document.querySelector(".test.button.primary.verbs").addEventListener("click", function(){
        let my_ans = document.querySelectorAll(".test-input.verbs")
        let r_ans = document.querySelectorAll(".right-answers")
        let result = 0
        let color = ""
        for(let i=0;i<task_verbs.length;i++){
            if(my_ans[i].value == task_verbs[i]){
                result ++
                color = "green"
            }else{
                color ="red"
                my_ans[i].style.textDecoration = "line-through" 
                r_ans[i].innerHTML+= "<div>" + task_verbs[i] +"</div>"
            }
            my_ans[i].style.backgroundColor = color
            my_ans[i].style.color ="white"
        }
        if (result == 7){
            progress[cabinet_user]["verbs"][0] ++
        }else{
            progress[cabinet_user]["verbs"][1]++
        }
        progress[cabinet_user]["verbs"][2]++
       
        setTimeout(function(){
            for(let i=0;i<task_verbs.length;i++){
                my_ans[i].style.backgroundColor = "#90e0ef"
                my_ans[i].style.color ="#03045e"
                my_ans[i].value = ""
                my_ans[i].style.textDecoration = "none"
                r_ans[i].innerHTML = ""
            }
            index++
            if (index >= tasks.length){
                index = 0
            }
            update_progress()
            load_task()
        }, 3000)
    })
}
load_verbs()