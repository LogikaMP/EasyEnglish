let btn_demo = document.querySelectorAll(".icon.demo")
let div_demo = document.querySelector(".demo.test")
let open_demo = false
let type_tes = ""
let grammar_ans = ""
const anim = anime({
    targets: div_demo,
    opacity: [0, 1],
    translateX: [-200, 0],
    translateY: [200, 0],
    scale: [0.6, 1],
    rotate: [-10, 0],
    easing: 'easeOutExpo',
    duration: 1200,
    autoplay: false
})


for(let i = 0; i < btn_demo.length; i++){
    btn_demo[i].addEventListener("click", function(){
        if (! open_demo){
            open_demo = true
            let file_card = "/static/cards/" + this.id + ".html"
            type_tes = this.id
            fetch(file_card).then(function(data){
                return data.text()
            }).then(function(card){
                let parcer = new DOMParser()
                let card_html = parcer.parseFromString(card, "text/html")
                let test = card_html.querySelector(".test.main")
                div_demo.appendChild(test)
                anim.direction = 'normal'
                anim.play()
                if (type_tes=="audio"){
                    div_demo.querySelector(".test button.secondary.audio").addEventListener("click", function(){
                        let a = new Audio("/static/audio/1.mp3")
                        a.play()
                    })
                } else if (type_tes=="grammar"){
                    let bnts = div_demo.querySelectorAll(".grammar-word.grammar")
                    for(let i=0;i<bnts.length;i++){
                        bnts[i].addEventListener("click", function(){
                            for(let j =0;j<bnts.length;j++){
                                bnts[j].style.backgroundColor = "white"
                                bnts[j].style.color = "#000055"
                            }
                            grammar_ans = this.innerHTML
                            bnts[i].style.backgroundColor = "#000055"
                            bnts[i].style.color = "white"
                        })
                    }
                }
                    div_demo.querySelector(".test.button.primary").addEventListener("click", function(){
                        if (type_tes == "word"){
                            let my_ans = div_demo.querySelector(".test.input.word").value
                            let ans = div_demo.querySelector(".word.current.right_ans")
                            if (my_ans == "Студент"){
                                ans.innerHTML = "Правильно! Регіструйтесь, щоб продовжити навчання."
                            }
                            else{
                                ans.innerHTML = "Неправильно. Правильна відповідь: Студент. Регіструйтесь, щоб продовжити навчання."
                            } 
                    } else
                    if(type_tes == "audio"){
                                let my_ans = div_demo.querySelector(".test.input.audio").value 
                                let answer = div_demo.querySelector(".audio.sentence")
                                if(my_ans=="There is the house where my family lives."){
                                    answer.innerHTML = "Правильно! Регіструйтесь, щоб продовжити навчання."
                                    }
                                else{
                                    answer.innerHTML = "Неправильно. Регіструйтесь, щоб продовжити навчання."
                                }
                    } else if(type_tes == "grammar"){
                        let answrs = div_demo.querySelector(".test-task")
                        if(grammar_ans=="I love EasyEnglish very much"){
                            answrs.innerHTML = "Правильно! Регіструйтесь, щоб продовжити навчання."
                        }else{
                            answrs.innerHTML = "Неправильно. Регіструйтесь, щоб продовжити навчання."
                        }

                    } else if (type_tes == "verbs"){
                        let ans = div_demo.querySelectorAll(".test-input.verbs")
                        let r_ans = [ "am", "are","is","is","is","are","are"]
                        let answers = div_demo.querySelector(".verbs-task")
                        let cout = 0
                        for(let i=0;i<r_ans.length;i++){
                            if (r_ans[i] == ans[i].value){
                                cout ++
                            }
                            if (cout == 7){
                                answers.innerHTML = "Правильно! Регіструйтесь, щоб продовжити навчання."
                            }else{
                                answers.innerHTML = "Неправильно. Регіструйтесь, щоб продовжити навчання."
                            }
                        }

                    }
                      setTimeout(function(){
                            open_demo = false
                            anim.reverse()
                            anim.play()
                        }, 1000)   
                })
                       
                    })
                
            
        } else{
            open_demo = false
            anim.reverse()
            anim.play()}

        
        })

}