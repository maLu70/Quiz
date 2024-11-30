let arrayPerguntas = ["a", "b", "c"]
let i = 0

function comecar() {
    document.querySelector(".pgPerguntas").style.display = ("block")
    document.querySelector(".pgInicial").style.display = ("none")
    
    document.querySelector("#perguntas").innerHTML = arrayPerguntas[0]

}

function proxima() {
    i++
    controlePerguntas()
}

function anterior() {
    if (i > 0) {
        i--
    }
    controlePerguntas()
}

function controlePerguntas() {
    let btnAnterior = document.querySelector("#btnAnt")
    let btnFinal = document.querySelector("#btnFinal")
    document.querySelector("#perguntas").innerHTML = arrayPerguntas[i]
    let btnProximo = document.getElementById("btnProxi")

    if (i > 0) {
        btnAnterior.style.display = ("block")
    } else {
        btnAnterior.style.display = ("none")
    }

    if (i == arrayPerguntas.length - 1) {
        btnFinal.style.display = ("block")
        btnProximo.style.display = "none"
        console.log("foi")
    } else {
        // btnFinal.style.display = "block"
        // btnProximo.style.display = "none"
    }

    if (btnProximo) {
        console.log("acehi");
    } else {
        console.log("nãoachie")
    }
}