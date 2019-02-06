document.addEventListener("keydown", a);

function a() {
  let randomNumber = Math.floor(((Math.random() * 3))) + 1;

  switch (randomNumber) {
    case 1:
      let A = new Audio("sounds/A.mp3");
      A.play();
      setTimeout("window.alert('A!')", 5000);
      break;
    case 2:
      let D = new Audio("sounds/D.mp3");
      D.play();
      setTimeout("window.alert('D!')", 5000);
      break;
    case 3:
      let E = new Audio("sounds/E.mp3");
      setTimeout("window.alert('E!')", 5000);
      E.play();
      break;
    default:
  }
}
