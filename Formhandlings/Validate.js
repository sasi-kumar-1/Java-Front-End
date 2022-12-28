function getData() {
    //let userName = document.getElementById('uName')
    let userName = document.getElementById('uName').value
    console.log(userName)
    document.getElementById('uName').value = userName.toUpperCase();
}