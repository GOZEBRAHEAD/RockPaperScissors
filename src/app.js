// ======= VARIABLES ======= //
const options = ["rock", "paper", "scissors"];
let totalRounds = 1;
let userLifes = 5;
let computerLifes = 5;
let playerName;

// ======= FUNCTIONS ======= //

// This function returns a random selection between "rock", "paper" and "scissors".
const computerPlay = () => options[Math.floor(Math.random() * 3)];

// This function verifies the user's selection.
const verifyUserSelection = (selection) => {

    if (typeof selection !== "string" || 
        (selection !== "rock" && selection !== "paper" && selection !== "scissors")) {

        alert("Error! Please enter 'rock', 'paper' or 'scissors'.");
        return false;
    }

    return true;
}

// This function verifies the selections between the user and the computer.
// Return types:
//          0 = draw.
//          1 = user wins.
//          2 = computer wins.
const getRoundWinner = (userSelection, computerSelection) => {

    if (userSelection === computerSelection) {
        return 0;
    }
    else if ((userSelection === "rock" && computerSelection === "scissors") || 
        (userSelection === "scissors" && computerSelection === "paper") || 
        (userSelection === "paper" && computerSelection === "rock")) {

        computerLifes--;
        return 1;
    }
    else {
        userLifes--;
        return 2;
    }
}

// This function verifies if there's a winner.
const someoneLose = () => (userLifes === 0 || computerLifes === 0);

// This function starts the bo5 game against the computer.
const startGame = () => {

    playerName = prompt("Please, enter your name.");

    while (!someoneLose()) {
        
        console.log("// ========== GAME STARTING ========== //");
        console.log("- Round: #" + totalRounds);
        console.log("- " + playerName + " lifes: " + userLifes);
        console.log("- Computer lifes: " + computerLifes);
        
        let userSelection = prompt("Select one: 'rock', 'paper' or 'scissors'");

        while (!verifyUserSelection(userSelection)) {

            userSelection = prompt("Select one: 'rock', 'paper' or 'scissors'");
        }

        console.log("- Your selection: " + userSelection);

        let computerSelection = computerPlay();
        console.log("- Computer's selection: " + computerSelection);

        console.log("-------------------");

        switch (getRoundWinner(userSelection, computerSelection)) {

            case 0:
                console.log("- Round result: [ IT'S A DRAW ]");
                break;
            
            case 1:
                console.log("- Round result: [ " + playerName + " wins ]");
                break;

            case 2:
                console.log("- Round result: [ Computer wins ]");
                break;
        }

        totalRounds++;
    }

    console.log("// ====================== //");
    console.log((userLifes !== 0 ? playerName : "Computer") + " wins the game!");
    console.log("// ====================== //");
}

window.onload = function() {

    startGame();
};