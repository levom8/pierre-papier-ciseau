let playerScore = 0;
let computerScore = 0;

// Generate a random hand for the CPU
function computerPlay() {
    let arr = ["Papier","Pierre","Ciseau"]
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function that will request input for Player's hand and format it
function playerPlay() {
    // let hand = prompt("Pick either Pierre, Papier ou Ciseau"); -- old instructions
    // let capLetter = hand.slice(0,1).toUpperCase(); -- old instructions
    // let smallLetter = hand.slice(1).toLowerCase(); -- old instructions
    // let fullHand = capLetter + smallLetter; -- old instructions
    
    if (!(fullHand == "Papier" || fullHand == "Pierre" || fullHand == "Ciseau")) {
        alert("ERROR, type either \"Papier\", \"Pierre\" ou \"Ciseau\"");
        return playerPlay();
    }
    else {
        return(fullHand);
    }
}

// Function that will play a round a compare hands to see who won
function playRound(computer, player) {
    if (computer === player) {
        alert(`TIE! ${computer} matches ${player}! Retry`);
    }
    else if ((computer == "Papier" && player == "Pierre") || 
            (computer == "Pierre" && player == "Ciseau") || 
            (computer == "Ciseau" && player == "Papier")) {
        alert(`You lose! ${computer} beats ${player}`);
    }
    else {
        alert(`You won! ${player} beats ${computer}`);
    }
    
}

// function should play 5 rounds of game then decide winner after counting points
// function game() {
//     for (i = 1; i <= 5; ++i) {
//         let round = playRound(computerPlay(),playerPlay());
//         console.log(round);
//             if (round.search(`You lose!`) > -1) {
//            alert(`Computer won ${++computerScore} point!`);
//         //    return computerScore;
//             }
//             else if (round.search(`You won!`) > -1) {
//             alert(`You won ${++playerScore} point!`);
//             // return playerScore;
//             }
//             else {
//             alert(`This is a draw`);
//             }
//         }   
//     if (playerScore > computerScore) {
//         alert(`I won with a total of ${playerScore} points!`)
//     }    
//     else if (computerScore > playerScore) {
//         alert(`I lost...Computer has a total of ${computerScore} points`)
//     }
//     else {
//         alert('Rematch?')
//     }
// }

// game()

const btnFeu = document.querySelector('#btnFeu');
btnFeu.addEventListener('click', () => {alert("hello");});


// playRound(playerPlay(),computerPlay())
