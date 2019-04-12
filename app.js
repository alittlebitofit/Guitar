document.addEventListener("keydown", playChord);
setTimeout("alert('Hello')");

function playChord() {
  let randomNumber = Math.floor(((Math.random() * 6))) + 1;

  switch (randomNumber) {
    case 1:
      console.log("D");
      dMajorChord();
      setTimeout("alert('D!')", 5000);
      break;
    case 2:
      console.log("A");
      aMajorChord();
      setTimeout("alert('A!')", 5000);
      break;
    case 3:
      console.log("E");
      eMajorChord();
      setTimeout("alert('E!')", 5000);
      break;
    case 4:
      console.log("D minor");
      dMinorChord();
      setTimeout("alert('D minor!')", 5000);
      break;
    case 5:
      console.log("A minor");
      aMinorChord();
      setTimeout("alert('A minor!')", 5000);
      break;
    case 6:
      console.log("E minor");
      eMinorChord();
      setTimeout("alert('E minor!')", 5000);
      break;
    default:
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
