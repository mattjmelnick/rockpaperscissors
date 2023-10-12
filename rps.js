function getPlayerSelection() {
    let playerChoice = prompt("Choose rock, paper, or scissors:");
    let playerSelection = playerChoice.toLowerCase();
    
    /*if (playerSelection == "rock" ||
        playerSelection == "paper" ||
        playerSelection == "scissors") {
            return playerSelection;
    }
    else {
        let chooseAgain = getPlayerSelection()
        return chooseAgain;
    }
}
*/

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
}

console.log(getPlayerSelection());