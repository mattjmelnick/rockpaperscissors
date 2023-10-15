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

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == computerSelection) {
        let tie = `${playerSelection} and ${computerSelection} are the same - TIE`;
        console.log(tie);
        return tie;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
             playerSelection == "paper" && computerSelection == "rock" ||
             playerSelection == "scissors" && computerSelection == "paper") {
                let playerWin = `${playerSelection} beats ${computerSelection} - WIN`;
                console.log(playerWin);
                return playerWin;
    }
    else {
        let playerLose = `${computerSelection} beats ${playerSelection} - LOSE`;
        console.log(playerLose);
        return playerLose;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = playRound(playerSelection, computerSelection);
    let winCheck = result.includes("WIN");
    let tieCheck = result.includes("TIE");

    if (winCheck == true) {
        playerScore++;
    }
    else if (winCheck == false && tieCheck == false) {
        computerScore++;
    }
    console.log(`Player - ${playerScore}, Computer - ${computerScore}`);

    /*while (playerScore != 5 || computerScore != 5) {
        result;
        if (winCheck == true) {
            playerScore++;
        }
        else if (winCheck == false && tieCheck == false) {
            computerScore++;
        }
        else {
            console.log("TIE");
        }

        console.log(`Player - ${playerScore}, Computer - ${computerScore}`);

        if (playerScore == 5) {
            let playerWin = "YOU WIN";
            console.log(playerWin);
            return playerWin;
        }
        else if (computerScore == 5) {
            let playerLose = "YOU LOSE";
            console.log(playerLose);
            return playerLose;
        }
    } */
}

let playGame = game();
console.log(playGame);
/*let result = playRound(playerSelection, computerSelection);
console.log(result); */