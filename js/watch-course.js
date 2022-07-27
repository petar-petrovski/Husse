var video = document.querySelector('video');
var timeBar = document.querySelector('.bar-color');
var playBtn = document.getElementById('play-pause');
var playScreen = document.getElementById('play-screen');

//VIDEO CONTROL BUTTONS

//Play
function togglePlay() {
    if (video.paused) {
        playBtn.classList.add('pause');
        playBtn.classList.remove('play');
        video.play();
    } else {
        playBtn.classList.add('play');
        playBtn.classList.remove('pause');
        video.pause();    }
}
//Play button
playBtn.onclick = function () {
    togglePlay();
};
//Play screen
playScreen.onclick = function () {
    togglePlay();
};

//VIDEO DURATION

//current play time
video.addEventListener ('timeupdate', function(){
    var playTime = video.currentTime;
    var minutes = Math.floor(playTime / 60);   
    var seconds = Math.floor(playTime - minutes * 60)
    var x = minutes < 10 ? "0" + minutes : minutes;
    var y = seconds < 10 ? "0" + seconds : seconds;

    var barPosition = video.currentTime / video.duration;
    timeBar.style.width = barPosition * 100 + "%";
    if (video.ended) {
        playBtn.classList.add('play');
        playBtn.classList.remove('pause');
    }
    document.getElementById('play-time').innerHTML=x + ":" + y;
})
//video length
window.addEventListener('load', function() {
    var fullTime = video.duration; 
    var minutes = Math.floor(fullTime / 60);   
    var seconds = Math.floor(fullTime - minutes * 60)
    var x = minutes < 10 ? "0" + minutes : minutes;
    var y = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById('full-time').innerHTML=x + ":" + y;
});

//VOLUME CONTROL
window.SetVolume = function(val) {
    var player = document.getElementById('play-screen');
    player.volume = val / 100;
};

//VOLUME BAR FUNCTIONALITY
const rangeInputs = document.querySelectorAll('input[type="range"]')
function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'vol-control') {
    target = document.getElementById('vol-control')} 
  const min = target.min
  const max = target.max
  const val = target.value
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

//SHOW - HIDE VOLUME BAR
function showVolume() {
    var volumeBtn = document.querySelector('.volume');
    volumeBtn.classList.toggle("hide");
    document.querySelector('.play-time').classList.toggle("move-right");
}

//FULL SCREEN
function fullscreen() {
    var element = document.getElementById("play-screen");       
    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }  
  }

  
//COURSE DETAILS LIST// 
// document.getElementById("toggleDetails").click();

function closeDescriptionList(y) {
  document.getElementById("cdetails-overlay").classList.remove("active");
  document.querySelector(".collapse-img").classList.remove("rotate");
  document.getElementById("cdetails-popup").classList.remove("active");

}

function toggleDescriptionList() {
  document.getElementById("cdetails-popup").classList.toggle("active");
  document.getElementById("cdetails-overlay").classList.toggle("active");
  document.querySelector(".collapse-img").classList.toggle("rotate");
}