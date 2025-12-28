function loadWorld(){
    function updateProgress(){
        document.querySelector('.total.').innerhtml = proress[cabinet_user]['world'][2]
        document.querySelector('.right').innerhtml = proress[cabinet_user]['world'][0]
        document.querySelector('.progress').innerhtml = proress[cabinet_user]['world'][1]
    }       
    let ln1 = 'en'
    let ln2 = 'ua'
}
loadWorld();
