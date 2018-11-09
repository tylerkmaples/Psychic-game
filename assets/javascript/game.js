// variables
var winsElem = document.getElementById("wins");
var lossesElem = document.getElementById("losses");
var guessesElem = document.getElementById("guessesleft");
var wrongGuessElem = document.getElementById("wrongguesses");

var wins = 0;
var losses = 0;
var guesses = 9;
var wrongGuess = [];
var cpuChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Get computer's randomly generated letter: (should this be a function which i then invoke when win/loss happens?)

var randomChar = Math.floor(Math.random() * cpuChoices.length);
var aiGuess = cpuChoices[randomChar];
console.log(aiGuess);

// function to check the guesses


var check = function () {
    if (wrongGuess.length === 9 ){
        alert("You are out of lives. Game Over!");
        reset();
    }
    else if (wrongGuess.length !==9) {
        wrongGuess.push(userInput);
        wrongGuessesElem.textContent = wrongGuess; 
    }
}

// reset the game when win/lose

var reset = function() {

}



// get user guess

document.onkeyup = function (e) {
    var userInput = e.key;
    alert("you entered " + userInput);

    // win game
    if (aiGuess === userInput){
        alert(userInput   +  " is correct. You win!");
        reset();
        wins++;
        
    }
    // guess incorrectly
    else if (aiGuess !== userInput) {
        alert(userInput + " is incorrect. Please try again.");
        guesses--;
        check();
        
    }

    winsElem.textContent = wins;
    lossesElem.textContent = losses;
    guessesElem.textContent = guesses;
    // wrongGuessElem.textcontent = wrong;
}
