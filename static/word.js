function loadWordModule(){
function updateProgress(){
    document.querySelector(".right").innerHTML = progress[cabinet_user]["word"][0]
    document.querySelector(".wrong").innerHTML = progress[cabinet_user]["word"][1]
    document.querySelector(".total").innerHTML = progress[cabinet_user]["word"][2]

}
updateProgress()
}

loadWordModule()