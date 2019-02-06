document.addEventListener("keydown", playChord);

function playChord() {
  let randomNumber = Math.floor(((Math.random() * 3))) + 1;

  switch (randomNumber) {
    case 1:
      console.log("A");
      aChord();
      setTimeout("alert('A!')", 5000);
      break;
    case 2:
      console.log("D");
      dChord();
      setTimeout("alert('D!')", 5000);
      break;
    case 3:
      console.log("E");
      eChord();
      setTimeout("alert('E!')", 5000);
      break;
    default:
  }
}

function aChord() {
  let A = new Audio("sounds/A.mp3");
  A.play();
}

function dChord() {
  let D = new Audio("sounds/D.mp3");
  D.play();
}


function eChord() {
  let E = new Audio("sounds/E.mp3");
  E.play();
}
