function getPlayerSelection() {
    let playerChoice = prompt("Choose rock, paper, or scissors:");
    let playerSelection = playerChoice.toLowerCase();
    
    if (playerSelection == "rock" ||
        playerSelection == "paper" ||
        playerSelection == "scissors") {
            return playerSelection;
    }
    else {
        let chooseAgain = getPlayerSelection()
        return chooseAgain;
    }

    // How the code works with a switch statement //
    /*
   switch(playerSelection) {
        case "rock":
        case "paper":
        case "scissors":
            return playerSelection;
            break;
        default:
            let chooseAgain = getPlayerSelection();
            return chooseAgain;
    }
    */
}

function getComputerSelection() {
    const RPS = ["rock", "paper", "scissors"];
    let computerSelection = RPS[Math.floor(Math.random() * RPS.length)];
    return computerSelection;
}

console.log(getPlayerSelection());
console.log(getComputerSelection());