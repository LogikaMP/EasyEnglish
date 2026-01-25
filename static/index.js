let btn_demo = document.querySelectorAll('.icon.demo')
let div_demo = document.querySelector('.demo.test')
for (let i=0; i<btn_demo.length; i++){
btn_demo[i].addEventListener('click', function(){
    let file_card = '/static/cards/' +this.id + '.html'
    fetch(file_card).then(function(data){
        return data.text()
    }).then(function(card){
        let parser = new DOMParser()
        let card_html = parser.parseFromString(card, 'text/html')
        let test = card_html.querySelector('.test.main')
        div_demo.innerHTML = ""
        div_demo.appendChild(test)
        if (this.id =='word'){
            document.querySelector('.test.button.primary.word').addEventListener('click', function(){
                let my_ans = document.querySelector('.test.input.word').value
                let ans = document.querySelector('.word.current.right_ans')
                if (my_ans == 'Свага'){
                    ans.innerHTML = "Молодець свага, тепер реєструйся і буть крутим розумником."
                }
                else{
                    ans.innerHTML = "Нічо страшного ти все одно свага, реєструйся і ставай ще крутішим."
                }
            })  
            
        }
    })
})
}