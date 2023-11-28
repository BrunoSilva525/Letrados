window.onload = function() {
    var savedBackground = localStorage.getItem('background');
    if (savedBackground) {
        document.body.className = savedBackground;
    }
};