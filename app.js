document.addEventListener("keydown", playChord);
setTimeout("alert('Hello')");

var chordAudio = null;
var chordSymbol = null;

function playChord() {
  let randomNumber = Math.floor(((Math.random() * 6))) + 1;

  switch (randomNumber) {
    case 1:
      console.log("D");
      chordAudio = new Audio("sounds/dmajor.mp3");
      chordSymbol = "D Major!";
      dMajorChord();
      setTimeout("alert('D!')", 5000);
      break;
    case 2:
      console.log("A");
      chordAudio = new Audio("sounds/amajor.mp3");
      chordSymbol = "A Major!";
      aMajorChord();
      setTimeout("alert('A!')", 5000);
      break;
    case 3:
      console.log("E");
      chordAudio = new Audio("sounds/emajor.mp3");
      chordSymbol = "E Major!";
      eMajorChord();
      setTimeout("alert('E!')", 5000);
      break;
    case 4:
      console.log("D minor");
      chordAudio = new Audio("sounds/dminor.mp3");
      chordSymbol = "D minor!";
      dMinorChord();
      setTimeout("alert('D minor!')", 5000);
      break;
    case 5:
      console.log("A minor");
      chordAudio = new Audio("sounds/aminor.mp3");
      chordSymbol = "A minor!";
      aMinorChord();
      setTimeout("alert('A minor!')", 5000);
      break;
    case 6:
      console.log("E minor");
      chordAudio = new Audio("sounds/eminor.mp3");
      chordSymbol = "E minor!";
      eMinorChord();
      setTimeout("alert('E minor!')", 5000);
      break;
    default:
  }
}

function previousChord(){
let previousChord = chordAudio;
if(previousChord != null){
previousChord.play();
setTimeout("alert('" + chordSymbol + "')", 5000);
}else{
alert("No chord played yet");
}
}


function aMinorChord() {
  let a = new Audio("sounds/aminor.mp3");
  a.play();
}

function dMinorChord() {
  let d = new Audio("sounds/dminor.mp3");
  d.play();
}

function eMinorChord() {
  let e = new Audio("sounds/eminor.mp3");
  e.play();
}



function aMajorChord() {
  let A = new Audio("sounds/amajor.mp3");
  A.play();
}

function dMajorChord() {
  let D = new Audio("sounds/dmajor.mp3");
  D.play();
}

function eMajorChord() {
  let E = new Audio("sounds/emajor.mp3");
  E.play();
}
