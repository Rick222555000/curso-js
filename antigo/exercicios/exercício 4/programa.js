function calcular(){
    let num = window.document.getElementById("num")
    let tab = window.document.getElementById("tabuada")
    if (num.value.length > 0){
        let numero = Number(num.value)
        tab.innerHTML = ""
        for(let passo = 1; passo <= 10; passo ++){
            let item = window.document.createElement('option')
            item.innerHTML += `${numero} x ${passo} = ${numero*passo}`
            item.value = `tab${passo}`
            tab.appendChild(item)
        }
    } else {
        window.alert("O parâmetro está vazio, por favor preenchar.")
    }
}
