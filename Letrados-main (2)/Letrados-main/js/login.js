$(document).ready(function() {
    $("#login-form").on("submit", function(event) {
        event.preventDefault();
        let username = $(this).find("input[name='username']").val();
        let password = $(this).find("input[name='password']").val();

        if (localStorage.getItem(username) === password) {
            location.href="../pages/menu.html";
        } 
        else
            alert('erro');
        
});

$("#signup-form").on("submit", function(event) {
    event.preventDefault();
    let username = $(this).find("input[name='username']").val();
    let password = $(this).find("input[name='password']").val();

    if (localStorage.getItem(username) === null) {
        localStorage.setItem(username, password);
        location.href="../pages/menu.html";
    } 
    else 
        alert('erro');
        
});
});