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

var 
