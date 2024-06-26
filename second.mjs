document.addEventListener("DOMContentLoaded", function() {

  gramofoniSubmit.addEventListener('click', checkMusic)
});

const secondContainer = document.querySelector('.secondContainer');
const rotatedOuter = document.querySelector('.sun');
rotatedOuter.addEventListener('click', rotateUpper);

const rotatedInner = document.querySelector('.sunInner');
rotatedInner.addEventListener('click', rotateInner);

const clockText = document.querySelector('.clockText');


const gramofoniInput = document.querySelector('#music');
const gramofoniSubmit = document.querySelector('.gramofoniSubmit');



const clock = document.querySelector('.clock');
clock.addEventListener('click', clockAudioPlay);

//return
const returnHomeButton = document.createElement('button');
returnHomeButton.className = "returnHomeButton";
secondContainer.appendChild(returnHomeButton);
returnHomeButton.textContent = "back to Homepage"

returnHomeButton.addEventListener('click', history_back);

function history_back() {
  window.history.back();
} 



//counters
let sunCount = 0;
let corCount = 0;

let puzzleCount = 2;
const puzzleCounter = document.querySelector('.puzzleCounter');
puzzleCounter.innerHTML = puzzleCount;

//audios
const bellAudio = new Audio('./resurssit/sound/belltolls.wav');
bellAudio.loop = false;

const gramofoniAudio = new Audio('./resurssit/sound/gramofoni2.wav');
gramofoniAudio.loop = false;
const gramofoniError = new Audio('./resurssit/sound/gramofoniError.mp3');
gramofoniError.loop = false;

const clockAudio = new Audio('./resurssit/sound/windup.mp3');
function clockAudioPlay() {
  clockText.style.display = "block";
  setTimeout(() => {
    clockText.style.display = "none";
  },2000)
  clockAudio.play();
}

const wavesAudio = new Audio('./resurssit/sound/waves.mp3');

const soundButton = document.querySelector('.soundButton');
soundButton.addEventListener('click', soundOn);

function soundOn() {
  wavesAudio.play();
}

const click1 = new Audio('./resurssit/sound/click1.mp3');
const click2 = new Audio('./resurssit/sound/click2.mp3');



//simple funcs
let rotation1 = 0;
const angle1 = 45;

let rotation2 = 0;
const angle2 = 45;





function rotateUpper() {
  corCount ++;
  click2.play();
  rotation1 = (rotation1 + angle1) % 360;

  rotatedOuter.style.transform = `rotate(${rotation1}deg)`;

  checkRotation()
}


function rotateInner() {
  sunCount ++;
  click1.play();

  rotation2 = (rotation2 + angle2) % 360;

  rotatedInner.style.transform = `rotate(${rotation2}deg)`;


  checkRotation()
}

function checkRotation() {
if(corCount === 6 && sunCount === 4 ) {

  bellAudio.play();
  checkPuzzles();
}else if(corCount === 8){
  corCount = 0;
}else if(sunCount === 8){
  sunCount = 0;
}
}



function checkMusic(target) {
  let value = gramofoniInput.value;

if(value == 4){
  wavesAudio.pause();
  gramofoniAudio.play()
  checkPuzzles();
  gramofoniInput.value="";

}else{
  gramofoniInput.value="";
  wavesAudio.pause();
  gramofoniError.play()

  setTimeout(() => {
    wavesAudio.play();
  },2000)
}
}

function checkPuzzles() {
 puzzleCount --;
 puzzleCounter.innerHTML = puzzleCount;
}

