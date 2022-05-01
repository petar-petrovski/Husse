var video = document.querySelector('video');
var timeBar = document.querySelector('.bar-color');
var playBtn = document.getElementById('play-pause');
var playScreen = document.getElementById('play-screen');


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

playBtn.onclick = function () {
    togglePlay();
};
playScreen.onclick = function () {
    togglePlay();
};
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
window.addEventListener('load', function() {
    var fullTime = video.duration; 
    var minutes = Math.floor(fullTime / 60);   
    var seconds = Math.floor(fullTime - minutes * 60)
    var x = minutes < 10 ? "0" + minutes : minutes;
    var y = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById('full-time').innerHTML=x + ":" + y;
});

window.SetVolume = function(val) {
    var player = document.getElementById('play-screen');
    player.volume = val / 100;
};


const rangeInputs = document.querySelectorAll('input[type="range"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'vol-control') {
    target = document.getElementById('vol-control')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})
function showVolume() {
    var volumeBtn = document.querySelector('.volume');
    volumeBtn.classList.toggle("hide");
    document.querySelector('.play-time').classList.toggle("move-right");
}
// $(document).ready(function(){
//     $("#sound").click(function(){
//       $("#vol-control").toggleClass("hide");
//     });
//   });
function fullscreen() {
    var element = document.getElementById("play-screen");       
    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }  
  }