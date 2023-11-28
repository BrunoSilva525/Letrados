window.onload = function() {
    var music = document.getElementById('music');
    var volumeSlider = document.getElementById('volume-slider');
    var backgroundSelect = document.getElementById('background-select');

    var savedVolume = localStorage.getItem('volume') || music.volume;
    music.volume = savedVolume;
    volumeSlider.value = savedVolume;

    volumeSlider.oninput = function() {
        music.volume = this.value;
        localStorage.setItem('volume', this.value);
    };

    var savedBackground = localStorage.getItem('background');
    if (savedBackground) {
        document.body.className = savedBackground;
    }

    backgroundSelect.onchange = function() {
        document.body.classList.remove('bg1', 'bg2', 'bg3', 'bg4');

        document.body.classList.add(this.value);
        localStorage.setItem('background', this.value);
    };
};