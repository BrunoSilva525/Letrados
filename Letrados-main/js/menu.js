let botaoSairEl = document.querySelector("#botao-sair");
let botaoOpcoesEl = document.querySelector("#botao-opcoes");
let botaoPlayEl = document.querySelector("#botao-play");

botaoPlayEl.addEventListener('click', function() {
    location.href="../pages/niveis.html";
})

botaoOpcoesEl.addEventListener('click', function() {
    location.href="../pages/opções.html";
})

botaoSairEl.addEventListener('click', function() {
    location.href="../pages/login.html"
});
