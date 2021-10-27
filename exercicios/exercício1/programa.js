function carregar(){
    var msg = window.document.getElementById("msg")
    var horas = new Date().getHours()
    var img = window.document.getElementById("img")
    var fun = window.document.getElementById("fundo")
    msg.innerText = `Agora são ${horas} horas.`
    if (0 <= horas && horas < 12){
        img.src = "manha.jpg"
        window.document.body.style.background = "rgb(148, 148, 248)"
    } else if (12 <= horas && horas <= 18){
        img.src = "tarde.jpg"
        window.document.body.style.background = "rgb(233, 113, 43)"
    } else {
        img.src = "noite.jpg"
    window.document.body.style.background = "rgb(87, 18, 114)"
    }
}