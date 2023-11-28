let botaoSairEl = document.querySelector("#botao-sair");
let botaoOpcoesEl = document.querySelector("#botao-opcoes");
let botaoPlayEl = document.querySelector("#botao-play");
let botaoSobreNosEl = document.querySelector("#botao-sobreNos");

botaoPlayEl.addEventListener('click', function() {
    location.href="niveis.html";
})

botaoOpcoesEl.addEventListener('click', function() {
    location.href="opções.html";
})

botaoSairEl.addEventListener('click', function() {
    location.href="index.html"
});

botaoSobreNosEl.addEventListener('click', function() {
    location.href="sobreNos.html";
});
