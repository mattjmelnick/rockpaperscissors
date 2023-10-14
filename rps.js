function getPlayerSelection() {
    let playerChoice = prompt("Choose rock, paper, or scissors:");
    let playerRPS = playerChoice.toLowerCase();
    
    if (playerRPS == "rock" ||
        playerRPS == "paper" ||
        playerRPS == "scissors") {
            return playerRPS;
    }
    else {
        let chooseAgain = getPlayerSelection()
        return chooseAgain;
    }

     // How the code works with a switch statement //
    /*
   switch(playerRPS) {
        case "rock":
        case "paper":
        case "scissors":
            return playerRPS;
            break;
        default:
            let chooseAgain = getPlayerSelection();
            return chooseAgain;
    }
    */
    }

function getComputerSelection() {
    const RPS = ["rock", "paper", "scissors"];
    let computerRPS = RPS[Math.floor(Math.random() * RPS.length)];
    return computerRPS;
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerSelection();

console.log(playerSelection);
console.log(computerSelection);


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        let tie = console.log(`${playerSelection} and ${computerSelection} are the same - TIE`);
        return tie;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
             playerSelection == "paper" && computerSelection == "rock" ||
             playerSelection == "scissors" && computerSelection == "paper") {
                let playerWin = console.log(`${playerSelection} beats ${computerSelection} - WIN`);
                return playerWin;
    }
    else {
        let playerLose = console.log(`${computerSelection} beats ${playerSelection} - LOSE`);
        return playerLose;
    }
}

let result = playRound(playerSelection, computerSelection);
console.log(result);