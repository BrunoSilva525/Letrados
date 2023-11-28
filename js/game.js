let palavras = ["banana", "laranja", "maçã", "abacaxi", "uva", "morango", "jaca", "tomate", "nicaragua", "samambaia", "salgado", "verde", "pinga", "verde", "azul", "amarelo", "samba", "cavalo", "chinês", "canudo", "nariz", "termo"];
let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let tentativasRestantes = 5;

function criarTentativa() {
    let tentativasDiv = document.getElementById("tentativas");
    let tentativaDiv = document.createElement("div");
    tentativaDiv.className = "tentativa";
    tentativasDiv.appendChild(tentativaDiv);

    for (let i = 0; i < palavraSecreta.length; i++) {
        let letraInput = document.createElement("input");
        letraInput.type = "text";
        letraInput.maxLength = 1;
        letraInput.className = "letra-input";
        letraInput.oninput = function () {
            if (this.value.length === 1) {
                let nextInput = this.nextElementSibling;
                if (nextInput && nextInput.classList.contains("letra-input")) {
                    nextInput.focus();
                }
            }
        };
        tentativaDiv.appendChild(letraInput);
    }

let verificarButton = document.createElement("button");
    verificarButton.textContent = "Verificar";
    verificarButton.onclick = function () {
        verificarTentativa(tentativaDiv);
    };
    tentativaDiv.appendChild(verificarButton);
}

function verificarTentativa(tentativaDiv) {
    let letraInputs = tentativaDiv.getElementsByClassName("letra-input");
    let feedbackDiv = document.createElement("div");
    feedbackDiv.className = "feedback-div";
    tentativaDiv.appendChild(feedbackDiv);

    let palavraDigitada = '';
    let feedback = '';

    for (let i = 0; i < letraInputs.length; i++) {
        let letra = letraInputs[i].value.toLowerCase();
        palavraDigitada += letra;

        if (letra === palavraSecreta[i]) {
            letraInputs[i].style.backgroundColor = '#27ae60';
        } else if (palavraSecreta.includes(letra)) {
            letraInputs[i].style.backgroundColor = '#f1c40f';
        } else {
            letraInputs[i].style.backgroundColor = 'gray';
        }

    }

    feedbackDiv.innerHTML = feedback;

    if (palavraDigitada === palavraSecreta || tentativasRestantes === 0) {
        for (let i = 0; i < letraInputs.length; i++) {
            letraInputs[i].disabled = true;
        }
    }

    tentativasRestantes--;
    if (tentativasRestantes === 0 || palavraDigitada === palavraSecreta) {
        let resultado = document.createElement("p");
        if (palavraDigitada === palavraSecreta) {
            resultado.textContent = "Parabéns! Você venceu!";
        } else {
            resultado.textContent = "Suas tentativas acabaram. A palavra era '" + palavraSecreta + "'.";
        }
        tentativaDiv.appendChild(resultado);
    }
}

for (let i = 0; i < 5; i++) {
    criarTentativa();
}
