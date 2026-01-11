function load_word(){
    function update_progress(){
        document.querySelector(".total").innerHTML = progress[cabinet_user]["word"][2]
        document.querySelector(".right").innerHTML = progress[cabinet_user]["word"][0]
        document.querySelector(".progress").innerHTML = progress[cabinet_user]["word"][0]
    }
    let ln1 = "en"
    let ln2 = "ua"
}
load_word()