function load_grammar(){
    function update_progress(){
    
        document.querySelector(".right").innerHTML = progress[cabinet_user]["grammar"][0]
        document.querySelector(".progress").innerHTML = progress[cabinet_user]["grammar"][1]
    }
      function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    update_progress()
    let index = 0
    let correct_btn = ""
    let ans_btn = document.querySelectorAll(".grammar-word.grammar")
    function load_task(){
        document.querySelector(".test-question.num").innerHTML = index + 1
        let ans= [tasks[index]["correct"],
        tasks[index]["wrong1"],
        tasks[index]["wrong2"],
        tasks[index]["wrong3"]]
        ans = shuffle(ans) 
        for (let i = 0; i < ans.length; i++){
            ans_btn[i].innerHTML = ans[i]
            if (ans[i] == tasks[index]["correct"]){
                correct_btn = ans_btn[i]
            }
        }    
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