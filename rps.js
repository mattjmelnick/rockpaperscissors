let rockButton = document.querySelector(".rockButton");
let paperButton = document.querySelector(".paperButton");
let scissorsButton = document.querySelector(".scissorsButton");

function playRock() {
    let playerSelection = "rock";
    let computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
}

function playPaper() {
    let playerSelection = "paper";
    let computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
}

function playScissors() {
    let playerSelection = "scissors";
    let computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
}

rockButton.addEventListener("click", playRock);
paperButton.addEventListener("click", playPaper);
scissorsButton.addEventListener("click", playScissors);

function getComputerSelection() {
    const RPS = ["rock", "paper", "scissors"];
    let computerRPS = RPS[Math.floor(Math.random() * RPS.length)];
    return computerRPS;
}

function playRound(playerSelection, computerSelection) {
    let choiceDisplay = document.querySelector(".choice-display");
    let playerScore = document.querySelector(".player-score-counter");
    let playerScoreCounter = Number(playerScore.textContent);
    let computerScore = document.querySelector(".computer-score-counter");
    let computerScoreCounter = Number(computerScore.textContent);
    let winLoseDisplay = document.querySelector(".win-lose-display");
    if (playerSelection == computerSelection) {
        let tie = `${playerSelection} and ${computerSelection} are the same - TIE`;
        choiceDisplay.textContent = tie;
        winLoseDisplay.textContent = "TIE";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
             playerSelection == "paper" && computerSelection == "rock" ||
             playerSelection == "scissors" && computerSelection == "paper") {
                let playerWin = `${playerSelection} beats ${computerSelection} - WIN`;
                choiceDisplay.textContent = playerWin;
                winLoseDisplay.textContent = "WIN";
                playerScoreCounter++;
                playerScore.textContent = playerScoreCounter;     
    }
    else {
        let playerLose = `${computerSelection} beats ${playerSelection} - LOSE`;
        choiceDisplay.textContent = playerLose;
        winLoseDisplay.textContent = "LOSE";
        computerScoreCounter++;
        computerScore.textContent = computerScoreCounter;
    }
    let roundCounter = Number(document.querySelector(".round-counter").textContent);
    roundCounter++;
    document.querySelector(".round-counter").textContent = roundCounter;
    if (playerScoreCounter == 5) {
        choiceDisplay.textContent = "YOU WIN";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    else if (computerScoreCounter == 5) {
        choiceDisplay.textContent = "YOU LOSE";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}