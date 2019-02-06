document.addEventListener("keydown", a);

function a() {
  let randomNumber = Math.floor(((Math.random() * 3))) + 1;
  console.log(randomNumber);

  switch (randomNumber) {
    case 1:
      console.log("A");
      let A = new Audio("sounds/A.mp3");
      A.play();
      setTimeout("window.alert('A!')", 5000);
      break;
    case 2:
      console.log("D");
      let D = new Audio("sounds/D.mp3");
      D.play();
      setTimeout("window.alert('D!')", 5000);
      break;
    case 3:
      console.log("E");
      let E = new Audio("sounds/E.mp3");
      setTimeout("window.alert('A!')", 5000);
      E.play();
      break;
    default:
  }
}
