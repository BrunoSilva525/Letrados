let botao1El = document.querySelector("#botao1");
let botao2El = document.querySelector("#botao2");
let botao3El = document.querySelector("#botao3");
let botao4El = document.querySelector("#botao4");
let botao5El = document.querySelector("#botao5");
let botao6El = document.querySelector("#botao6");
let botao7El = document.querySelector("#botao7");
let botao8El = document.querySelector("#botao8");
let botao9El = document.querySelector("#botao9");
let botao10El = document.querySelector("#botao10");

[botao1El, botao2El, botao3El, botao4El, botao5El, botao6El, botao7El, botao8El, botao9El, botao10El].forEach((el)=> {
    el.addEventListener('click', () => location.href="../pages/game.html");
})
