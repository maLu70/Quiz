let arrayPerguntas = [
    per1 = {
        pergun: "Qual sua estação favorita?",
        a: "Verão.",
        b: "Outono.",
        c: "Inverno.",
        d: "Primavera."
    },
    per2 = {
        pergun: " No seu grupo de amigos você é a pessoa?",
        a: "Calmo(a), quieto(a).",
        b: "Esquisito(a).",
        c: "Animado(a) e extrovertido(a).",
        d: "Quieto(a), mas sempre ouvindo."
    },
    per3 = {
        pergun: "Quando você enfrenta um novo desafio o que faz primeiro?",
        a: " Organizo um plano detalhado antes de começar.",
        b: "Reúno as pessoas para buscar uma solução em grupo.",
        c: "Mergulho no problema e lidero a solução.",
        d: "Crio uma abordagem única ou inovadora."
    },
    per4 = {
        pergun: "Em um projeto qual seu papel normalmente?",
        a: "Analiza, pensa em tudo e depois executa.",
        b: "Gosta de liderar mas nunca gosta do resultado.",
        c: "Não  faz nada, só apoia.",
        d: "Liderar e apoiar os outros a fazer mais coisas."
    },
    per5 = {
        pergun: "Como você age em conflitos?",
        a: "Aceita o que fazem para você.",
        b: "Resolver sempre sem brigas.",
        c: "Defende seus pensamentos antes de tudo.",
        d: "Foca em brigar e mostrar que você é melhor."
    },
    per6 = {
        pergun: "O que te motiva a trabalhar?",
        a: "aa6",
        b: "Datas, necessidade ou alguém apressando.",
        c: "Dinheiro.",
        d: "dd6"
    },
    per7 = {
        pergun: "Qual frase combina mais contigo?",
        a: "“Devagar e sempre.”",
        b: "“Se acalme, tudo vai passar”",
        c: "“FIcarei ao teu lado até o fim”",
        d: "“A criatividade transforma problemas em oportunidades”"
    },
    per8 = {
        pergun: "Qual sua maior qualidade?",
        a: "Calmo",
        b: "Persistente",
        c: "Empenhado",
        d: "Resiliente"
    },
    per9 = {
        pergun: "Se você tivesse que fazer algo maluco, o que faria?",
        a: "Me mataria pela pátria",
        b: "Colocaria uma panela na cabeça e sairia falando com objetos inanimados",
        c: "Comeria um cérebro humano",
        d: "Comeria um humano inteiro"
    },
    per10 = {
        pergun: "Qual a profissão mais se encaixa para você?",
        a: "Médico",
        b: "Engenheiro",
        c: "Professor",
        d: "Empreendedor"
    }
]

let arrayRespostas = []

let i = 0

let cereja = 0, ervilha1 = 0, ervilha2 = 0, girassol = 0, batatinha = 0, geloErvilha = 0, batata = 0, carnivora = 0

function comecar() {
    document.querySelector(".pgPerguntas").style.display = ("flex")
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

    if (i < 10) {
        document.querySelector("#perguntas").innerHTML = arrayPerguntas[i].pergun
        alternativas()
    }

    if (i > 0) {
        btnAnterior.style.display = ("block")
    } else {
        btnAnterior.style.display = ("none")
    }

    if (i == arrayPerguntas.length - 1) {
        btnFinal.innerText = ("FINALIZAR")
    } else if (i < arrayPerguntas.length - 1) {
        btnFinal.innerText = ("PROXIMA")
    } else if (i >= arrayPerguntas.length) {
        faltaDresposta()
    }
}

function faltaDresposta() {
    let semResposta = 0

    arrayPerguntas.forEach((e) => {
        if (e === -1) {
            semResposta++
            console.log(semResposta);
        }
    })

    if (semResposta != 0) {
        alert("oi")
        console.log("semresposta")
    } else {
        document.querySelector(".pgFinal").style.display = ("block")
        document.querySelector(".pgPerguntas").style.display = ("none")

        setTimeout(() => {
            window.open('resultados/girassol.html')
            console.log("foifoi");
            //document.querySelector("#temp").innerHTML = 

        }, 5000);
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

function contPontos() {

    for (let j = 0; j < 10; j++) {

        if (j == 0) {
            switch (arrayRespostas[j]) {
                case 0:
                    girassol += 2
                    cereja += 0.5
                    batatinha += 0.3
                    break;

                case 1:
                    batata += 0.5
                    break

                case 2:
                    geloErvilha += 1
                    break;

                case 3:
                    ervilha1 += 1
                    ervilha2 += 1
                    break;
            }
        }

        if (j == 1) {
            switch (arrayRespostas[j]) {
                case 0:
                    batatinha += 0.5
                    batata += 1
                    break;

                case 1:
                    batatinha += 1.5
                    break

                case 2:
                    ervilha2 += 0.6
                    break;

                case 3:
                    ervilha1 += 1
                    girassol += 2
                    break;
            }
        }

        if (j == 2) {
            switch (arrayRespostas[j]) {
                case 0:
                    ervilha1++
                    geloErvilha ++
                    ervilha2+=2
                    break;
    
                case 1:
                    break
                    ervilha1 += 0.5
                    geloErvilha += 0.5
                    ervilha2 +=1
                case 2:
                    break;
                    girassol += 0.5
                case 3:
                    carnivora++
                    batatinha+= 0.8
                    break;
            }
        }

        if (j == 3) {
            switch (arrayRespostas[j]) {
                case 0:
                    ervilha1++
                    geloErvilha+=0.5
                    ervilha2++
                    break;

                case 1:
                    cereja+=2
                    break

                case 2:
                    girassol++
                    batata++
                    batatinha+=0.5
                    break;

                case 3:
                    geloErvilha+=0.7
                    ervilha2+=0.7
                    break;
            }
        }

        if (j == 4) {
            switch (arrayRespostas[j]) {
                case 0:
                    batata+=1.5
                    break;

                case 1:
                    girassol++
                    break

                case 2:
                    cereja+=1.5
                    carnivora+=2
                    break;

                case 3:
                    cereja+=1.5
                    geloErvilha++
                    break;
            }
        }

        if (j == 5) {
            switch (arrayRespostas[j]) {
                case 0:
                    girassol++
                    break;

                case 1:
                    carnivora++
                    break

                case 2:
                    cereja++
                    batatinha+=2
                    break;

                case 3:
                    cereja+=2
                    carnivora+=2
                    break;
            }
        }

        if (j == 6) {
            switch (arrayRespostas[j]) {
                case 0:
                    girassol+=0,5
                    batata+=1.5
                    break;

                case 1:
                    geloErvilha+=2
                    break

                case 2:
                    ervilha1+=2
                    break;

                case 3:
                    batata+=0,7
                    break;
            }
        }

        if (j == 7) {
            switch (arrayRespostas[j]) {
                case 0:
                    ervilha1++
                    batata+=0.3
                    batatinha+=0.4
                    break;

                case 1:
                    girassol+=0.5
                    ervilha2+=1.2
                    batatinha++
                    geloErvilha++
                    break

                case 2:
                    ervilha2+=1.5
                    batatinha+=0,5
                    geloErvilha++
                    ervilha1+=1.5
                    break;

                case 3:
                    batatinha++
                    batata+=1.5
                    break;
            }
        }

        if (j == 8) {
            switch (arrayRespostas[j]) {
                case 0:
                    batata+=2
                    cereja+=1,5
                    break;

                case 1:
                    //DAVE DOIDÃO
                    break

                case 2:
                    //Zumbi????????
                    break;

                case 3:
                    carnivora+=2
                    break;
            }
        }

        if (j == 9) {
            switch (arrayRespostas[j]) {
                case 0:
                    girassol++
                    break;

                case 1:
                    batatinha+=0,5
                    break

                case 2:
                    ervilha1++
                    ervilha2++
                    geloErvilha+=1.3
                    break;

                case 3:
                    girassol+=0.5
                    break;
            }
        }

    }

}
