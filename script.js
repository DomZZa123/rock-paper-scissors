let computerScore = 0;
let playerScore = 0

//ROUND

function playRound(playerChoice, computerChoice) {
    if ((playerChoice === `rock` && computerChoice === `scissors`) ||
        (playerChoice === `paper` && computerChoice === `rock`) ||
        (playerChoice === `scissors` && computerChoice === `paper`)) {
            playerScore++
            return "WIN"
    } else if(playerChoice === computerChoice) {
        return "DRAW"
    } else {
        computerScore++
        return "LOSS"
    }
}

//GAME

for (let i = 0; i < 5; i++) {

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

    let getPlayerChoice = prompt("What do you choose?");
    let playerChoice = getPlayerChoice.toLowerCase();


    playRound(playerChoice, computerChoice)
    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)

    if ((i === 4) && (playerScore < computerScore)) {
        console.log("YOU LOSE!")
    } else if ((i === 4) && (computerScore === playerScore)) {
        console.log("IT`S A DRAW")
    } else if (i === 4){
        console.log("YOU WIN")
    }
   
}
