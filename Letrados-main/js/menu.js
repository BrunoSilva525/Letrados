let botaoSairEl = document.querySelector("#botao-sair");
let botaoOpcoesEl = document.querySelector("#botao-opcoes");
let botaoPlayEl = document.querySelector("#botao-play");
let botaoSobreNosEl = document.querySelector("#botao-sobreNos");

botaoPlayEl.addEventListener('click', function() {
    location.href="../pages/niveis.html";
})

botaoOpcoesEl.addEventListener('click', function() {
    location.href="../pages/opções.html";
})

botaoSairEl.addEventListener('click', function() {
    location.href="../pages/index.html"
});

botaoSobreNosEl.addEventListener('click', function() {
    location.href="../pages/sobreNos.html";
});
