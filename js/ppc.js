let computerSelection;
let playerSelection;
let lostRound;
let wonRound;
let tieRound;
let playerScore = 0;
let computerScore = 0;

function game(input) {

        for (i = 0; i <= 5; i++) {
            let playerSelection = prompt("Please choose between Pierre, Papier ou Ciseau");
            
            if (playerSelection )
        
        }
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == "Papier" && playerSelection == "Pierre" || computerSelection == "Pierre" && playerSelection == "Ciseau" || computerSelection == "Ciseau" && playerSelection == "Papier") {
        console.log(computerSelection);
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection == playerSelection) {
        console.log(computerSelection);
        return  "TIE! Retry";
    }
    else {
        console.log(computerSelection);
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
}

function computerPlay() {
    let arr = ["Papier","Pierre","Ciseau"]
    computerSelection = arr[Math.floor(Math.random() * arr.length)];
    return computerSelection;
}


function playerPlay(hand) {
    let capLetter = hand.slice(0,1).toUpperCase();
    let smallLetter = hand.slice(1).toLowerCase();
    
    playerSelection = capLetter + smallLetter;

    if (!(playerSelection == "Papier" || playerSelection == "Pierre" || playerSelection == "Ciseau")) {
        alert("ERROR, type either \"Papier\", \"Pierre\" ou \"Ciseau\"");
    }
    else {
        return(playerSelection);
    }
    }

computerPlay();
playerPlay("pieRRE");
playRound(computerSelection, playerSelection);
game(playRound(computerSelection, playerSelection));