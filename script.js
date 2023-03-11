//COMPUTER CHOICE

function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3)
    if (randomNumber === 1) {
        return "rock"
    } else if (randomNumber === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

let computerChoice = getComputerChoice();


//PLAYER CHOICE

let getPlayerChoice = prompt("What do you choose?");
let playerChoice = getPlayerChoice.toLowerCase();

console.log(playerChoice)
console.log(computerChoice)

//ROUND

function playRound(playerChoice, computerChoice) {
    if ((playerChoice === `rock` && computerChoice === `scissors`) ||
        (playerChoice === `paper` && computerChoice === `rock`) ||
        (playerChoice === `scissors` && computerChoice === `paper`)) {
        return "WIN"
    } else if(playerChoice === computerChoice) {
        return "DRAW"
    } else {
        return "LOSS"
    }
}

console.log(playRound(playerChoice, computerChoice))

//GAME

