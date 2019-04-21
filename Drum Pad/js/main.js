function play(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const pad = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();

    pad.classList.add("pad-hit");
    setTimeout(function hitEnd() {
        pad.classList.remove("pad-hit");
    }, 200);


}

window.addEventListener("keydown", play);