let logado = false;
let login = document.getElementById("login").value;
let senha = document.getElementById("senha").value;

if(localStorage.getItem("login") == login && localStorage.getItem("senha") == senha) {
    logado = true;
    console.log("entrou");
}

if(logado != true) {
    alert("voce não está logado");
    location.href="../pages/login.html";
}