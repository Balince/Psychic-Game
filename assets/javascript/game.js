var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letters;

var compChoices = 'abcdefghijklmnopqrstuvwxyz'.split('');

// java for computer decisions is done

var userChoiceText = document.getElementById("userChoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var gLText = document.getElementById("gL-text");
var lettersText = document.getElementById("letters-text");

document.onkeydown = function(event) {
    
var letterA = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
var userGuess = event.key;

var compGuess = compChoices [Math.floor(Math.random() * compChoices.length)];


if (compGuess === userGuess) {
wins++, guessesLeft = 9
}

else if (compGuess !== userGuess) {
guessesLeft--
}

if (guessesLeft < 1) { 
losses++, guessesLeft = 9
}



userChoiceText.textContent = "You chose: " + userGuess;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
gLText.textContent = "Guesses left: " + guessesLeft;
lettersText.textContent = "Letters you've tried: " + letters;

};