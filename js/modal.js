let botaoAbrirModalEl = document.querySelector("#botao-modal");
let botaoFecharModalEl = document.querySelector("#close-modal")
let modalEl = document.querySelector("#modal");
let fadeEl = document.querySelector("#fade");

let togleModal = () => {
    [modalEl,fadeEl].forEach((el) => el.classList.toggle("hide"));
}

[botaoAbrirModalEl, botaoFecharModalEl, fade].forEach((el) => {
    el.addEventListener('click', () => togleModal());
});

cheet('a p a r e c e', function () {
    $('#botao-modal').css('opacity', '1');
    $('#botao-modal').css('pointer-events', 'all');
  });

  cheet('d e s a p a r e c e', function () {
    $('#botao-modal').css('opacity', '0');
    $('#botao-modal').css('pointer-events', 'none');
  });  