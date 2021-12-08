const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
var audioElement = new Audio('bells.mp3')

playBtn.addEventListener("click", function() {
    bell.classList.add("shaking");
    bell.style.animationPlayState = 'running';
    audioElement.play();
})

pauseBtn.addEventListener("click", function() {
    bell.style.animationPlayState = 'paused';
    audioElement.pause();
})

stopBtn.addEventListener("click", function() {
    bell.classList.remove("shaking");
    audioElement.pause();
    audioElement.currentTime = 0;
})