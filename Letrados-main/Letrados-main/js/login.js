let botaoEl = document.querySelector('#botao-login');
botaoEl.addEventListener('click', function logar(){
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
        localStorage.setItem("login", login);
        localStorage.setItem("senha", senha);
        location.href = "../pages/menu.html"

});

