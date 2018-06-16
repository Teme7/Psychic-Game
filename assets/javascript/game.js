//----- variable declaration ------

// computer randomly picks from this array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// this var will be assigned a letter from the [letters] each time the game starts anew
var computerChoice = null; 

// holds keys pressed
var lettersAttempted = [];

// counts down # of chances left, set at 9 to start the game
var remainingChances = 9;

// registers # wins, set at zero to start the game
var wins = 0;

// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
var losses = 0;

// ------ function declaration --------

// random machine picks assigned
var newComputerChoice = function() {
    computerChoice  = letters[math.floor(Math.random()*26)];
};

// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
var newLettersAttempted = function() {
    document.querySelector("#soFar").innerHTML = lettersAttempted.join(", ");
};

// the countdown on display
var newRemainingChances = function() {
    document.querySelector("#remainingChances").innerHTML = remainingChances;
};

// calling the reset function
var reset = function() {
    remainingChances = 9;
    lettersAttempted = [];
    newComputerChoice();
    newLettersAttempted();
    newRemainingChances();
  };
// registers keys the user press
document.onkeydown = function(event) {
    remainingChances--;
  
    // changes all letters to lower case
    var letter = String.fromCharCode(event.which).toLowerCase();
  
    lettersAttempted.push(letter);
  
    // Then its going to run the update functions
    newRemainingChances();
    newLettersAttempted();

    //---condition for a win---
     
    // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
    if(letter == computerChoice) {
        wins++; // gamer wins
        document.querySelector("#wins").innerHTML = wins;
        
        reset(); // fresh start achieved by running reset function after a win/lose
    }

    //----condition for a loss---

    // When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins). 
    if(remainingChances == 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;

        reset();
    }
}