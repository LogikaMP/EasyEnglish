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
        document.querySelector(".verbs.tence").innerHTML = tasks[index]["tense"]
        task_verbs = [tasks[index]["I"],
        tasks[index]["You"],
        tasks[index]["He/She/It"],
        tasks[index]["He/She/It"],
        tasks[index]["He/She/It"],
        tasks[index]["We"],
        tasks[index]["They"]]
    }
    load_task()

    }

    document.querySelectorALL(".test.button.primary.verbs").addEventListener("click", function(){
        let my_ans = document.querySelector(".test_input.verbs")
        let result = 0
        for (let i = 0; i < my_ans.length; i++){
            if (my_ans[i].value == task_verbs[i]){
                result ++
                my_ans[i].style.backgroundColor = "url( 55, 225, 0)"
            } else {
                my_ans[i].value += "Вірна відповідь" + task_verbs[i] 
                my_ans[i].style.backgroundColor = "url(255, 0, 0)"
            } 
            if (result == my_ans.length){
                progress[cabinet_user]["verbs"][0]++
            } else{
                progress[cabinet_user]["verbs"][1]++    
            }}
            
    
        progress[cabinet_user]["verbs"][2]++
        setTimeout(function(){
            for (let i = 0; i < my_ans.length; i++){
                my_ans[i].style.backgroundColor = "#fff"
                my_ans[i].value = ""
            }   
            index++
            if (index >= tasks.length){
                index = 0
            }
            update_progress()
            load_task()
        }, 1000)
    })

load_verbs()