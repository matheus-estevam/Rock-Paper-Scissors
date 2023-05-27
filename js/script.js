
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You Won! Rock beats Scissors";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You Won! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You Won! Scissors beats Paper";
    } else if (computerSelection === playerSelection) {
        return "It's a tie!";
    }

    return "Invalid input! Please choose ROCK, PAPER, or SCISSORS.";

}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose  => (ROCK),(PAPER),(SCISSORS):");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))

    }

}

game()




