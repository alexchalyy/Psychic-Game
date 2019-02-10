/*  This is javascript that plays Psychic game.

    Written by Alex Chalyy on 2/9/2019. */

var wins = 0, losses = 0, guesses = 9, guessedletters = "", random, userGuess;


function random_character() {

    /*  This generates a random lower case letter. */

    var chars = "abcdefghijklmnopqurstuvwxyz";
    var c = chars.substr(Math.floor(Math.random() * 27), 1);

    return c;
}

function reset() {

    /*  This function resets global guess variables when user wins or loses. */

    guesses = 9;                            //      reset all other variables
    guessedletters = "";
    document.getElementById("left").textContent = "Guesses left: ";
    document.getElementById("far").textContent = "Your guesses so far: ";
    random = random_character();
}

function loss() {

    /*  This function is called when the user loses the game. It resets the game for the next round. */

    losses++;                           //      append losses by 1
    console.log("You lose:( Too many wrong letter tries.");
    console.log("Losses: " + losses);   //      reset guess variables
    document.getElementById("loss").textContent = "Losses: " + losses;
    reset();    
}

random = random_character();
document.onkeyup = function (event) {
    // This function repeats infinite rounds of guessing letter game.
    // Determines which key was pressed.

    userGuess = event.key;
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses: " + guesses);
    console.log("Guessedletters: " + guessedletters);
    console.log("Random letter: " + random);    //  random letter computer guess
    if (userGuess === random) {               //  if user wins
        wins++;                                 //      append win count by 1
        console.log("Congratulations, you won!");
        console.log("Wins: " + wins);
        document.getElementById("win").textContent = "Wins: " + wins;
        reset();                                //  reset guess variables
    } else {                               //  if user guesses a wrong letter
        guesses--;
        console.log("Guesses: " + guesses);
        document.getElementById("left").textContent = "Guesses left: " + guesses;
        if (guesses != 0) {
            if (guesses == 8) {
                guessedletters += userGuess;
            }
            else {
                guessedletters = guessedletters + ", " + userGuess;    //  note: works with any typed characters not just letters
            }
            document.getElementById("far").textContent = "Your Guesses so far: " + guessedletters;
        }
        else {
            loss();
        }
    }
}
