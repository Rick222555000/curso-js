function preencher(){
    var nasc = Number.parseInt(window.document.getElementById("ano").value)
    var ano = new Date().getFullYear()
    if (nasc > ano || nasc.length == 0){
        window.alert("Verifique os dados, tente novamente.")
    } else {
        var idade = ano - nasc
        var sexo = window.document.getElementsByName("sex")
        var genero = sexo[0].checked?'Homem':'Mulher'
    }
    var res = window.document.querySelector("div#res")
    res.innerText = `Detectamos ${genero} com ${idade} anos.`
}