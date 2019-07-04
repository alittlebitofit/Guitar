// string
var chordName = null;

// whether play button was pressed
var isPlayPressed = false;

// last chord file
var previousChord = null;

// whether individual chord button was pressed
var isChordPressed = false;

// chord name of the last played chord
var previousChordName = null;


// When play button is pressed
function prepareNewChord() {
  let randomNumber = Math.floor(((Math.random() * 8))) + 1;

  switch (randomNumber) {
    case 1:
      chordName = "aminor";
      break;
    case 2:
      chordName = "dminor";
      break;
    case 3:
      chordName = "eminor";
      break;
    case 4:
      chordName = "amajor";
      break;
    case 5:
      chordName = "cmajor";
      break;
    case 6:
      chordName = "dmajor";
      break;
    case 7:
      chordName = "emajor";
      break;
    case 8:
      chordName = "gmajor";
      break;
    default:
      isPlayPressed = false;
  }

  isPlayPressed = true;
  isChordPressed = false;
  previousChordName = chordName;
  playNewChord();

}


// Play new chord
function playNewChord() {
  let chord = new Audio("sounds/" + chordName + ".mp3");
  chord.play();
  popUpMessage();
}


// When "Last Played" button is pressed
function playPreviousChord() {

  // If play was pressed only then can previous chord be played
  if (isPlayPressed) {
    previousChord = new Audio("sounds/" + previousChordName + ".mp3");
    previousChord.play();
    setTimeout("alert('" + previousChordName + "')", 5000);
  } else {
    alert("No chord played yet");
  }
}


// Pop up on window revealing the chord played
function popUpMessage() {
  if (!isChordPressed) {
    setTimeout("alert('" + chordName + "')", 5000);
  }
}


// Minor chords

function aMinorChord() {
  chordName = "aminor";
  isChordPressed = true;
  playNewChord();
}

function dMinorChord() {
  chordName = "dminor";
  isChordPressed = true;
  playNewChord();
}

function eMinorChord() {
  chordName = "eminor";
  isChordPressed = true;
  playNewChord();
}


// Major chords

function aMajorChord() {
  chordName = "amajor";
  isChordPressed = true;
  playNewChord();
}

function cMajorChord() {
  chordName = "cmajor";
  isChordPressed = true;
  playNewChord();
}

function dMajorChord() {
  chordName = "dmajor";
  isChordPressed = true;
  playNewChord();
}

function eMajorChord() {
  chordName = "emajor";
  isChordPressed = true;
  playNewChord();
}

function gMajorChord() {
  chordName = "gmajor";
  isChordPressed = true;
  playNewChord();
}
