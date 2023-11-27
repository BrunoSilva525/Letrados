var palavras = ["banana", "laranja", "maçã", "abacaxi", "uva", "morango", "jaca", "tomate", "nicaragua", "samambaia"];
var palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
var tentativasRestantes = 5;

function criarTentativa() {
    var tentativasDiv = document.getElementById("tentativas");
    var tentativaDiv = document.createElement("div");
    tentativaDiv.className = "tentativa";
    tentativasDiv.appendChild(tentativaDiv);

    for (var i = 0; i < palavraSecreta.length; i++) {
        var letraInput = document.createElement("input");
        letraInput.type = "text";
        letraInput.maxLength = 1;
        letraInput.className = "letra-input";
        letraInput.oninput = function () {
            if (this.value.length === 1) {
                var nextInput = this.nextElementSibling;
                if (nextInput && nextInput.classList.contains("letra-input")) {
                    nextInput.focus();
                }
            }
        };
        tentativaDiv.appendChild(letraInput);
    }

    var verificarButton = document.createElement("button");
    verificarButton.textContent = "Verificar";
    verificarButton.onclick = function () {
        verificarTentativa(tentativaDiv);
    };
    tentativaDiv.appendChild(verificarButton);
}

function verificarTentativa(tentativaDiv) {
    var letraInputs = tentativaDiv.getElementsByClassName("letra-input");
    var feedbackDiv = document.createElement("div");
    feedbackDiv.className = "feedback-div";
    tentativaDiv.appendChild(feedbackDiv);

    var palavraDigitada = '';
    var feedback = '';

    for (var i = 0; i < letraInputs.length; i++) {
        var letra = letraInputs[i].value.toLowerCase();
        palavraDigitada += letra;

        if (letra === palavraSecreta[i]) {
            feedback += '<span class="feedback green-bg">' + letra + '</span>';
        } else if (palavraSecreta.includes(letra)) {
            feedback += '<span class="feedback yellow-bg">' + letra + '</span>';
        } else {
            feedback += '<span class "feedback gray-bg">' + letra + '</span>';
        }
    }

    feedbackDiv.innerHTML = feedback;

    if (palavraDigitada === palavraSecreta || tentativasRestantes === 0) {
        for (var i = 0; i < letraInputs.length; i++) {
            letraInputs[i].disabled = true;
        }
    }

    tentativasRestantes--;
    if (tentativasRestantes === 0 || palavraDigitada === palavraSecreta) {
        var resultado = document.createElement("p");
        if (palavraDigitada === palavraSecreta) {
            resultado.textContent = "Parabéns! Você venceu!";
        } else {
            resultado.textContent = "Suas tentativas acabaram. A palavra era '" + palavraSecreta + "'.";
        }
        tentativaDiv.appendChild(resultado);
    }
}

for (var i = 0; i < 5; i++) {
    criarTentativa();
}