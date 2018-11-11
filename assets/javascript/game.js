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

// ai guess
var randomChar = Math.floor(Math.random() * cpuChoices.length);
var aiGuess = cpuChoices[randomChar];
console.log(aiGuess);


// reset the game when win/lose
var startGuess = function() {
    wrongGuess = [];
    guesses = 9;
    randomChar = Math.floor(Math.random() * cpuChoices.length);
    aiGuess = cpuChoices[randomChar];
    console.log(aiGuess);
}

// get user guess
document.onkeyup = function (e) {
    var userInput = e.key.toLowerCase();
    console.log(userInput);
    console.log(aiGuess);
    alert("you entered " + userInput);

    var isInvalid = function () {
        return cpuChoices.indexOf(userInput) === -1
    }
    
    if(!isInvalid()) {
    
        // Guess correctly
        if (aiGuess === userInput){
            alert(userInput   +  " is correct. You win!");
            wins++;
            startGuess();
        }

        // guess incorrectly
        else if (aiGuess !== userInput && wrongGuess.indexOf(userInput) > -1){
            alert("You already guessed that! Please try another letter.");

        }

        else if (aiGuess !== userInput && wrongGuess.indexOf(userInput) < 0 && guesses > 1){                         
            alert(userInput + " is incorrect. Please try again.");
            guesses--;
            wrongGuess.push(userInput);
            console.log(wrongGuess);
        
        }

        else {
            alert(userInput + " is incorrect. Game Over!");
            losses++;
            startGuess();
        }
    
    }
    
    else {
        alert("Invalid key! Please choose an alphabetical letter.")
    }
    

    winsElem.textContent = wins;
    lossesElem.textContent = losses;
    guessesElem.textContent = guesses;
    wrongGuessElem.textContent = wrongGuess;
}
