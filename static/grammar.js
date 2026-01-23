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
    let my_ans
    function load_task(){
       document.querySelector(".num").innerHTML = index + 1
       let ans = [tasks[index]["correct"],tasks[index]["wr1"],
        tasks[index]["wr2"],tasks[index]["wr3"]]
        ans = shuffle(ans)
        for(let i = 0; i < ans.length; i++){
            ans_btn [i].innerHTML = ans[i]
            if(ans[i] == tasks[index]["correct"]){
                correct_btn = ans_btn[i]
            }
        }
    }
    for(let i = 0; i < ans_btn.length; i++){
        ans_btn[i].addEventListener("click", function(){
            for(let k = 0; k<ans_btn.length; k++){
                ans_btn[k].style.backgroundColor = "#fff"
                ans_btn[k].style.color = "#03045e"
            }
            this.style.backgroundColor = "#03045e"
            this.style.color = "white"
            my_ans = this
        })
    }
    load_task() 

    document.querySelector(".test.button.primary.grammar").addEventListener("click", function(){
        let result = ''
        if(my_ans.innerHTML == tasks[index]["correct"]){
            result = "green"
            progress[cabinet_user]["grammar"][0]++
        }else{
            result = "red"
            progress[cabinet_user]["grammar"][1]++
        }
        progress[cabinet_user]["grammar"][2]++
        correct_btn.style.backgroundColor = "green"
        my_ans.style.backgroundColor = result
        correct_btn.style.color =  "white"
        setTimeout(function(){
            correct_btn.style.backgroundColor = "#fff"
            my_ans.style.backgroundColor = "#fff"
            my_ans.style.color = "#03045e"
            correct_btn.style.color =  "#03045e"
            index++
            if (index >= tasks.length){
                index = 0
            }
            update_progress()
            load_task()
        }, 3000)
    })
}
load_grammar()