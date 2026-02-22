function load_audio(){
    function update_progress(){
    
        document.querySelector(".right").innerHTML = progress[cabinet_user]["audio"][0]
        document.querySelector(".progress").innerHTML = progress[cabinet_user]["audio"][1]
    }
  
    update_progress()
    let index = 0
    let task_audio = ""
    function load_task(){
        let file = "/static/audio/"+tasks[index]["mp3"]
        task_audio = new Audio (file)
    }
    load_task()
    document.querySelector(".test.button.audio").addEventListener("click", function(){
        task_audio.play()
    })

    document.querySelector(".test.button.primary.audio").addEventListener("click", function(){
        let my_ans = document.querySelector(".test.input.audio")
        let result = ''
        let right_ans = document.querySelector(".audio.sentence")
        if(my_ans.value == tasks[index]["en"]){
            result = "👍"
            progress[cabinet_user]["audio"][0]++
        }else{
            result = "👎"
            progress[cabinet_user]["audio"][1]++
        }
        progress[cabinet_user]["audio"][2]++
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
load_audio()