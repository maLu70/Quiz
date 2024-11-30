let arrayPerguntas = [
    per1 = {
        pergun: "test1",
        a: "a",
        b: "b",
        c: "c",
        d: "d"
    },
    per2 = {
        pergun: "test2",
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd"
    }
]

let arrayRespostas = []

let i = 0

function comecar() {
    document.querySelector(".pgPerguntas").style.display = ("block")
    document.querySelector(".pgInicial").style.display = ("none")
    
    document.querySelector("#perguntas").innerHTML = arrayPerguntas[0].pergun

    alternativas()
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
    document.querySelector("#perguntas").innerHTML = arrayPerguntas[i].pergun
    let btnProximo = document.getElementById("btnProxi")

    alternativas()

    if (i > 0) {
        btnAnterior.style.display = ("block")
    } else {
        btnAnterior.style.display = ("none")
    }

    if (i == arrayPerguntas.length - 1) {
        btnFinal.style.display = ("block")
        // btnProximo.style.display = "none"
        console.log("foi")
    } else {
        btnFinal.style.display = "none"
        // btnProximo.style.display = "none"
    }

    if (btnProximo) {
        console.log("acehi");
    } else {
        console.log("nãoachie")
    }
}

function alternativas() {
    let lbls = document.querySelectorAll('label')

    lbls[0].innerHTML = arrayPerguntas[i].a
    lbls[1].innerHTML = arrayPerguntas[i].b
    lbls[2].innerHTML = arrayPerguntas[i].c
    lbls[3].innerHTML = arrayPerguntas[i].d
}