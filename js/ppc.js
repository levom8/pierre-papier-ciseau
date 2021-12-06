let playerScore = 0;
let computerScore = 0;
let choix = prompt("Pick either Pierre, Papier ou Ciseau");


function game() {
// check if CPU won the round so 0 pts but if I win the round +1pt

function computerPlay() {
    let arr = ["Papier","Pierre","Ciseau"]
    return arr[Math.floor(Math.random() * arr.length)];
}

function playerPlay(hand) {
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

function playRound(computer, player) {
    console.log(`Computer played ${computer}`);
    console.log(`You played ${player}`);
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

    for (i = 0; i < 6; i++) {
        let computerSelection = computerPlay();

        console.log(playRound(computerPlay(),playerPlay(choix)));
    }
    
    // if (input.search(`You lose!`) > -1) {
    //     return `Computer won ${computerScore++} point!`;
    // }
    // else if (input.search(`You won!`) > -1) {
    //     return `You won ${playerScore++} point!`;
    // }
    // else {
    //     return `This is a draw`;
    // }

let playerSelection = playerPlay(choix);
let round = playRound(computerSelection, playerSelection);
}



let finalScore = game();
// console.log(finalScore);

// game(playRound(computerSelection, playerSelection));
