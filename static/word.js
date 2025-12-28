function load_word(){
    function update_progress(){
       
        document.querySelector(".total").innerHTML = progres[cabinet_user]["word"][2]
        document.querySelector(".right").innerHTML = progres[cabinet_user]["word"][0]
        document.querySelector(".right").innerHTML = progres[cabinet_user]["word"][1]
    }
    let ln1 = "en"
    let ln2 = "ua"
}
load_word()