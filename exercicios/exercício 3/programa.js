function contar(){
    let início = window.document.getElementById("inicio")
    let fim = window.document.getElementById("fim")
    let passo = window.document.getElementById("passo")
    let res = window.document.querySelector("div#res")

    if (início.value.length == 0 || fim.value.length == 0){
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contagem:<br>"
        let p = Number(passo.value)
        let i = Number(início.value)
        let f = Number(fim.value)
        if (p == 0){
            p = 1
            window.alert("Não é possível contar, considerarei que o passo seja 1.")
        } if (f >= i) {
            for (i; i <= f; i += p){
                res.innerHTML += `${i}\u{1F449}`
            }
        } else if (f < i){
            for (i; f <= i; i -= p){
                res.innerHTML += `${i}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}