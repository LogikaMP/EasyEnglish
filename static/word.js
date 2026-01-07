function load_word(word){
    function update_prograss(){
        document.querySelector(".total").innerHTML = progress[cabinet_user]["word"][2]
        document.querySelector(".right").innerHTML = progress[cabinet_user]["word"][0]
        document.querySelector(".progress").innerHTML = progress[cabinet_user]["word"][0]
    }
    let ln1 = "en"
    let ln2 = "ua"
    

    update_prograss()
}
load_word()
