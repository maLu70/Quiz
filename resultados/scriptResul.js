let resultado = localStorage.getItem('resul');
        let top3 = JSON.parse(localStorage.getItem('top3Codigos')); 
        console.log(top3);
        
        let resul1 = document.getElementById("resul1");
        let resul2 = document.getElementById("resul2");
        let resul3 = document.getElementById("resul3");
        let vencedor = document.getElementById("vencedor")
        let personagem = document.querySelector('.personagem')
        
        vencedor.textContent = "Voce e como um(a)"+top3[0].nome
        resul1.textContent = top3[1].nome + ": " + top3[1].valor + "%";
        resul2.textContent = top3[2].nome + ": " + top3[2].valor + "%";
        resul3.textContent = top3[3].nome + ": " + top3[3].valor + "%";
        
        
        switch (top3[0].codigo) {
            case 1:
                personagem.src = "img/GIFs/disparervilha.gif"
                break;
        
            case 2:
                personagem.src = "img/GIFs/girassol.gif"
                break;
        
            case 3:
                personagem.src = "img/GIFs/Wall_nut_gif.webp"
                break;
        
            case 4:
                personagem.src = "img/GIFs/cherrybombs.webp"
                break;
        
            case 5:
                 personagem.src = "img/GIFs/Snowpea.webp"
                break;
        
            case 6:
                personagem.src = "img/GIFs/potatomine.gif"
                break;
        
            case 7:
                personagem.src = "img/GIFs/choper.webp"
                break;
        
            case 8:
                personagem.src = "img/GIFs/repeter.gif"
                break;
        }
        
        setTimeout(() => {
            personagem.classList.add('enlarged');
        }, 100);