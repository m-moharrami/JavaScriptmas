const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
var audioElement = new Audio('bells.mp3')

playBtn.addEventListener("click", function() {
    audioElement.play();
})

pauseBtn.addEventListener("click", function() {
    audioElement.pause();
})