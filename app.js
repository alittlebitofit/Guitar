//document.addEventListener("keydown", playChord);
//setTimeout("alert('Hello')");

var chordAudio = null;
var chordSymbol = null;
var isPlayPressed = false;
var lastChord = null;
var isChordPressed = false;

function playChord() {
  let randomNumber = Math.floor(((Math.random() * 8))) + 1;
  isPlayPressed = true;
  isChordPressed = true;

  switch (randomNumber) {
    case 1:
      aMinorChord();
      break;
    case 2:
      dMinorChord();
      break;
    case 3:
      eMinorChord();
      break;
    case 4:
      aMajorChord();
      break;
    case 5:
      cMajorChord();
      break;
    case 6:
      dMajorChord();
      break;
    case 7:
      eMajorChord();
      break;
    case 8:
      gMajorChord();
      break;
    default:
      isPlayPressed = false;
  }
}


function previousChord(){
  if(isPlayPressed){
    lastChord = chordAudio;
  }
  if(lastChord != null){
    lastChord.play();
    popUpMessage();
  }else{
    alert("No chord played yet");
  }
}


function popUpMessage(){
  if(isPlayPressed){
    setTimeout("alert('" + chordSymbol + "')", 1000);
    isChordPressed = false;
  }
}


function aMinorChord() {
  chordAudio = new Audio("sounds/aminor.mp3");
  chordAudio.play();
  chordSymbol = "A minor!";
  if(isChordPressed){
     popUpMessage(); 
  }
}

function dMinorChord() {
  chordAudio = new Audio("sounds/dminor.mp3");
  chordAudio.play();
  chordSymbol = "D minor!";
  if(isChordPressed){
     popUpMessage(); 
  }
}

function eMinorChord() {
  chordAudio = new Audio("sounds/eminor.mp3");
  chordAudio.play();
  chordSymbol = "E minor!";
  if(isChordPressed){
     popUpMessage(); 
  }
}



function aMajorChord() {
  chordAudio = new Audio("sounds/amajor.mp3");
  chordAudio.play();
  chordSymbol = "A major!";
  if(isChordPressed){
     popUpMessage(); 
  }
}

function cMajorChord() {
  chordAudio = new Audio("sounds/cmajor.mp3");
  chordAudio.play();
  chordSymbol = "C major!";
  if(isChordPressed){
     popUpMessage(); 
  }
}

function dMajorChord() {
  chordAudio = new Audio("sounds/dmajor.mp3");
  chordAudio.play();
  chordSymbol = "D major!";
  if(isChordPressed){
     popUpMessage(); 
  }
}

function eMajorChord() {
  chordAudio = new Audio("sounds/emajor.mp3");
  chordAudio.play();
  chordSymbol = "E major!";
  if(isChordPressed){
     popUpMessage(); 
  }
}

function gMajorChord() {
  chordAudio = new Audio("sounds/gmajor.mp3");
  chordAudio.play();
  chordSymbol = "G major!";
  if(isChordPressed){
     popUpMessage(); 
  }
}


