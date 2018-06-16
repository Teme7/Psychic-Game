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

// registers # losses
var losses = 0;

// ------ function declaration --------

// random machine picks assigned
var newComputerChoice = function() {
    computerChoice  = letters[math.floor(Math.random()*26)];
};

// user's choices displayed
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

// registering keys user presses
document.onkeydown = function(event) {
    remainingChances--;
  
    // changes all letters to lower case
    var letter = String.fromCharCode(event.which).toLowerCase();
  
    lettersAttempted.push(letter);
  
    // Then its going to run the update functions
    updateGuessesLeft();
    updateGuessesSoFar();

    if(letter == computerChoice) {
        wins++; // gamer wins
        document.querySelector("#wins").innerHTML = wins;
        reset(); // fresh start achieved by running reset function after a win/lose
    }
}