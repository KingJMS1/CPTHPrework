// Global Constants
const nextClueWaitTime = 1000; // Time before clue sequence playback

// Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var cluePauseTime = 333; // Pause in between clues for x time

// Starts the game, swaps start/stop buttons
function startGame() {
  progress = 0;
  guessCounter = 0;
  clueHoldTime = 1000;
  cluePauseTime = 333;
  gamePlaying = true;
  for (let i = 0; i < pattern.length; i++) {
    pattern[i] = Math.floor(Math.random() * 4) + 1
  }
  document.getElementById("startGameBtn").classList.add("hidden");
  document.getElementById("stopGameBtn").classList.remove("hidden");
  playClueSequence();
}

// Stops the game, swaps stop/start buttons
function stopGame() {
  gamePlaying = false;
  document.getElementById("stopGameBtn").classList.add("hidden");
  document.getElementById("startGameBtn").classList.remove("hidden");
}

function lightButton(btn) {
  document.getElementById("gameB" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("gameB" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // If player guessed correctly
  if (btn == pattern[guessCounter]) {
    guessCounter += 1;
    // If player finished sequence
    if (guessCounter > progress) {
      if (guessCounter >= pattern.length) {
        winGame();
        return;
      }
      progress += 1;
      guessCounter = 0;
      playClueSequence();
    } else {
      // Wait for next player input
    }
  } else {
    loseGame();
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lose.");
}

function winGame() {
  stopGame();
  alert("Game Over. You win.");
}

function playClueSequence() {
  var guessCounter = 0;
  clueHoldTime *= 0.95;
  cluePauseTime *= 0.95;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 523
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(stopTone, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  console.log("Stop called.");
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
