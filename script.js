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
    },
    per3 = {
        pergun: "test3",
        a: "aa3",
        b: "bb3",
        c: "cc3",
        d: "dd3"
    },
    per4 = {
        pergun: "test4",
        a: "aa4",
        b: "bb4",
        c: "cc4",
        d: "dd4"
    },
    per5 = {
        pergun: "test5",
        a: "aa5",
        b: "bb5",
        c: "cc5",
        d: "dd5"
    },
    per6 = {
        pergun: "test6",
        a: "aa6",
        b: "bb6",
        c: "cc6",
        d: "dd6"
    },
    per7 = {
        pergun: "test7",
        a: "aa7",
        b: "bb7",
        c: "cc7",
        d: "dd7"
    },
    per8 = {
        pergun: "tes8",
        a: "aa8",
        b: "bb8",
        c: "cc8",
        d: "dd8"
    },
    per9 = {
        pergun: "test9",
        a: "aa9",
        b: "bb9",
        c: "cc9",
        d: "dd9"
    },
    per10 = {
        pergun: "test10",
        a: "aa10",
        b: "bb10",
        c: "cc10",
        d: "dd10"
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
    contResp()
    i++
    controlePerguntas()
    controleRadios()
    console.log(arrayRespostas)
}

function anterior() {
    contResp()
    i--
    controlePerguntas()
    controleRadios()
    console.log(arrayRespostas)
}

function controlePerguntas() {
    let btnAnterior = document.querySelector("#btnAnt")
    let btnFinal = document.querySelector("#btnFinal")

    document.querySelector("#perguntas").innerHTML = arrayPerguntas[i].pergun
    alternativas()

    if (i > 0) {
        btnAnterior.style.display = ("block")
    } else {
        btnAnterior.style.display = ("none")
    }

    if (i == arrayPerguntas.length - 1) {
        btnFinal.innerText = ("Finalizar")
    }
}

function alternativas() {
    let lbls = document.querySelectorAll('label')

    lbls[0].innerHTML = arrayPerguntas[i].a
    lbls[1].innerHTML = arrayPerguntas[i].b
    lbls[2].innerHTML = arrayPerguntas[i].c
    lbls[3].innerHTML = arrayPerguntas[i].d
}

function contResp() {
    let radios = document.querySelectorAll("input[type='radio']")
    let radioSelecionado = -1

    radios.forEach((e, index) => {
        if (e.checked) {
            radioSelecionado = index
        }
    })

    arrayRespostas[i] = radioSelecionado
}

function controleRadios() {
    let radios = document.querySelectorAll("input[type='radio']")

    radios.forEach(radio => {
        radio.checked = false
    })

    let radioAnterior = arrayRespostas[i]

    if (radioAnterior !== undefined && radioAnterior !== -1) {
        radios[radioAnterior].checked = true
    }
}
