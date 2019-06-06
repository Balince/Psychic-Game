var wins = 0;
var losses = 0;
var guessesLeft = 9;

var compChoices = 'abcdefghijklmnopqrstuvwxyz'.split('');

// java for computer decisions is done

var userChoiceText = document.getElementById("userChoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var gLText = document.getElementById("gL-text");

document.onkeydown = function(event) {

var userGuess = event.key;

var compGuess = compChoices [Math.floor(Math.random() * compChoices.length)];

if (userGuess === 'abcdefghijklmnopqrstuvwxyz'.split('')) {

if (compGuess === userGuess) {
wins++
}
if (compGuess !== userGuess) {
guessesLeft--
}
if (guessesLeft = 0) { 
losses++
}


userChoiceText.textContent = "You chose: " + userGuess;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
gLText.textContent = "Guesses left: " + guessesLeft;
}

};