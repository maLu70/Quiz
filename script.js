let arrayPerguntas = [
    per1 = {
        pergun: "Qual sua estacao favorita?",
        a: "Verao.",
        b: "Outono.",
        c: "Inverno.",
        d: "Primavera."
    },
    per2 = {
        pergun: "No seu grupo de amigos voce e a pessoa?",
        a: "Calmo(a), quieto(a).",
        b: "Esquisito(a).",
        c: "Animado(a) e extrovertido(a).",
        d: "Quieto(a), mas sempre ouvindo."
    },
    per3 = {
        pergun: "Quando voce enfrenta um novo desafio o que faz primeiro?",
        a: "Organizo um plano detalhado antes de comecar.",
        b: "Reuno as pessoas para buscar uma solucao em grupo.",
        c: "Mergulho no problema e lidero a solucao.",
        d: "Crio uma abordagem unica ou inovadora."
    },
    per4 = {
        pergun: "Em um projeto qual seu papel normalmente?",
        a: "Analisa, pensa em tudo e depois executa.",
        b: "Gosta de liderar mas nunca gosta do resultado.",
        c: "Nao faz nada, so apoia.",
        d: "Liderar e apoiar os outros a fazer mais coisas."
    },
    per5 = {
        pergun: "Como voce age em conflitos?",
        a: "Aceita o que fazem para voce.",
        b: "Resolver sempre sem brigas.",
        c: "Defende seus pensamentos antes de tudo.",
        d: "Foca em brigar e mostrar que voce e melhor."
    },
    per6 = {
        pergun: "O que te motiva a trabalhar?",
        a: "Algo que me proporcione prazer",
        b: "Datas, necessidade ou alguem apressando.",
        c: "Dinheiro.",
        d: "Algo que me de destaque"
    },
    per7 = {
        pergun: "Qual frase combina mais contigo?",
        a: "\"Devagar e sempre.\"",
        b: "\"Se acalme, tudo vai passar\"",
        c: "\"Ficarei ao teu lado ate o fim\"",
        d: "\"A criatividade transforma problemas em oportunidades\""
    },
    per8 = {
        pergun: "Qual sua maior qualidade?",
        a: "Calmo",
        b: "Persistente",
        c: "Empenhado",
        d: "Resiliente"
    },
    per9 = {
        pergun: "Se voce tivesse que fazer algo maluco, o que faria?",
        a: "Me mataria pela patria",
        b: "Colocaria uma panela na cabeca e sairia falando com objetos inanimados",
        c: "Comeria um cerebro humano",
        d: "Comeria um humano inteiro"
    },
    per10 = {
        pergun: "Qual a profissao mais se encaixa para voce?",
        a: "Medico",
        b: "Engenheiro",
        c: "Professor",
        d: "Empreendedor"
    }
]


let resul = 0

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
    let tempparainner = document.querySelector(".pgFinal").innerText

    let maior = 0;
    let codmaior = 0;
    let total = ervilha1 + girassol + batata + cereja + geloErvilha + batatinha + carnivora + ervilha2;

    contPontos()

    if (ervilha1 > maior) {
        maior = ervilha1;
        codmaior = 0;
    }
    if (girassol > maior) {
        maior = girassol;
        codmaior = 1;
    }
    if (batata > maior) {
        maior = batata;
        codmaior = 2;
    }
    if (cereja > maior) {
        maior = cereja;
        codmaior = 3;
    }
    if (geloErvilha > maior) {
        maior = geloErvilha;
        codmaior = 4;
    }
    if (batatinha > maior) {
        maior = batatinha;
        codmaior = 5;
    }
    if (carnivora > maior) {
        maior = carnivora;
        codmaior = 6;
    }
    if (ervilha2 > maior) {
        maior = ervilha2;
        codmaior = 7;
    }

    arrayRespostas.forEach((e) => {
        if (e === -1) {
            semResposta++
            console.log(semResposta);
        }
    })

    if (semResposta != 0) {
        alert("Responda todas perguntas")
        console.log("semresposta")
        i--;
    } else {
        document.querySelector(".pgFinal").style.display = ("flex")
        document.querySelector(".pgPerguntas").style.display = ("none")

        setTimeout(() => {

            let soma = cereja + ervilha1 + ervilha2 + girassol + batatinha + geloErvilha + batata + carnivora
            salvartop3(cereja, ervilha1, ervilha2, girassol, batatinha, geloErvilha, batata, carnivora, soma)

            window.open('resultados/index.html')

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
                    geloErvilha++
                    ervilha2 += 2
                    break;

                case 1:
                    break
                    ervilha1 += 0.5
                    geloErvilha += 0.5
                    ervilha2 += 1
                case 2:
                    break;
                    girassol += 0.5
                case 3:
                    carnivora++
                    batatinha += 0.8
                    break;
            }
        }

        if (j == 3) {
            switch (arrayRespostas[j]) {
                case 0:
                    ervilha1++
                    geloErvilha += 0.5
                    ervilha2++
                    break;

                case 1:
                    cereja += 2
                    break

                case 2:
                    girassol++
                    batata++
                    batatinha += 0.5
                    break;

                case 3:
                    geloErvilha += 0.7
                    ervilha2 += 0.7
                    break;
            }
        }

        if (j == 4) {
            switch (arrayRespostas[j]) {
                case 0:
                    batata += 1.5
                    break;

                case 1:
                    girassol++
                    break

                case 2:
                    cereja += 1.5
                    carnivora += 2
                    break;

                case 3:
                    cereja += 1.5
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
                    batatinha += 2
                    break;

                case 3:
                    cereja += 2
                    carnivora += 2
                    break;
            }
        }

        if (j == 6) {
            switch (arrayRespostas[j]) {
                case 0:
                    girassol += 0, 5
                    batata += 1.5
                    break;

                case 1:
                    geloErvilha += 2
                    break

                case 2:
                    ervilha1 += 2
                    break;

                case 3:
                    batata += 0, 7
                    break;
            }
        }

        if (j == 7) {
            switch (arrayRespostas[j]) {
                case 0:
                    ervilha1++
                    batata += 0.3
                    batatinha += 0.4
                    break;

                case 1:
                    girassol += 0.5
                    ervilha2 += 1.2
                    batatinha++
                    geloErvilha++
                    break

                case 2:
                    ervilha2 += 1.5
                    batatinha += 0, 5
                    geloErvilha++
                    ervilha1 += 1.5
                    break;

                case 3:
                    batatinha++
                    batata += 1.5
                    break;
            }
        }

        if (j == 8) {
            switch (arrayRespostas[j]) {
                case 0:
                    batata += 2
                    cereja += 1, 5
                    break;

                case 1:
                    //DAVE DOIDÃO
                    break

                case 2:
                    //Zumbi????????
                    break;

                case 3:
                    carnivora += 2
                    break;
            }
        }

        if (j == 9) {
            switch (arrayRespostas[j]) {
                case 0:
                    girassol++
                    break;

                case 1:
                    batatinha += 0, 5
                    break

                case 2:
                    ervilha1++
                    ervilha2++
                    geloErvilha += 1.3
                    break;

                case 3:
                    girassol += 0.5
                    break;
            }
        }

    }

}
function salvartop3(cereja, ervilha1, ervilha2, girassol, batatinha, geloErvilha, batata, carnivora, soma) {
    let valores = [
        { codigo: 1, valor: parseFloat(((ervilha1 / soma) * 100).toFixed(1)), nome: 'Disparervilha' },
        { codigo: 2, valor: parseFloat(((girassol / soma) * 100).toFixed(1)), nome: 'Girassol' },
        { codigo: 3, valor: parseFloat(((batata / soma) * 100).toFixed(1)), nome: 'Nozobstaculo' },
        { codigo: 4, valor: parseFloat(((cereja / soma) * 100).toFixed(1)), nome: 'Cereja Bomba' },
        { codigo: 5, valor: parseFloat(((geloErvilha / soma) * 100).toFixed(1)), nome: 'Disparervilha Gelada' },
        { codigo: 6, valor: parseFloat(((batatinha / soma) * 100).toFixed(1)), nome: 'Batatamina' },
        { codigo: 7, valor: parseFloat(((carnivora / soma) * 100).toFixed(1)), nome: 'Carnivora' },
        { codigo: 8, valor: parseFloat(((ervilha2 / soma) * 100).toFixed(1)), nome: 'Duplaervilha' }
    ];

    top4 = [{ codigo: -1, valor: 0 }, { codigo: -1, valor: 0 }, { codigo: -1, valor: 0 }, { codigo: -1, valor: 0 }];

    valores.forEach(item => {
        if (item.valor > top4[0].valor) {
            top4[3] = top4[2];
            top4[2] = top4[1];
            top4[1] = top4[0];
            top4[0] = item;
        } else if (item.valor > top4[1].valor) {
            top4[3] = top4[2];
            top4[2] = top4[1];
            top4[1] = item;
        } else if (item.valor > top4[2].valor) {
            top4[3] = top4[2];
            top4[2] = item;
        } else if (item.valor > top4[3].valor) {
            top4[3] = item;
        }
    });

    localStorage.setItem('top3Codigos', JSON.stringify(top4));
    console.log(top4);

}