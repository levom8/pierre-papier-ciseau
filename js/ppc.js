let playerScore = 0;
let computerScore = 0;

// Generate a random hand for the CPU
function computerPlay() {
    let arr = ["Papier","Pierre","Ciseau"]
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function that will request input for Player's hand and format it
function playerPlay() {
    let hand = prompt("Pick either Pierre, Papier ou Ciseau");
    let capLetter = hand.slice(0,1).toUpperCase();
    let smallLetter = hand.slice(1).toLowerCase();
    let fullHand = capLetter + smallLetter;

    if (!(fullHand == "Papier" || fullHand == "Pierre" || fullHand == "Ciseau")) {
        alert("ERROR, type either \"Papier\", \"Pierre\" ou \"Ciseau\"");
    }
    else {
        return(fullHand);
    }
}

// Function that will play a round a compare hands to see who won
function playRound(computer, player) {
    if (computer === player) {
        return  `TIE! Retry`;
    }
    else if ((computer == "Papier" && player == "Pierre") || 
            (computer == "Pierre" && player == "Ciseau") || 
            (computer == "Ciseau" && player == "Papier")) {
        return `You lose! ${computer} beats ${player}`;
    }
    else {
        return `You won! ${player} beats ${computer}`;
    }
}

// function should play 5 rounds of game then decide winner after counting points
function game() {
    for (i = 1; i <= 5; i++) {
        console.log(playRound(computerPlay(),playerPlay()));
        //     if (round.search(`You lose!`) > -1) {
        //    return `Computer won ${computerScore++} point!`;
        //     }
        //     else if (round.search(`You won!`) > -1) {
        //     return `You won ${playerScore++} point!`;
        //     }
        //     else {
        //     return `This is a draw`;
        //     }
        }   
}

let computerSelection = computerPlay();
let playerSelection = playerPlay();
let round = playRound(computerSelection, playerSelection);
let finalScore = game();
