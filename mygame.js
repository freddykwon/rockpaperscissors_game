const choices = document.querySelectorAll('#Choices');
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const scores = document.getElementById('scoreboard');
const eachRound = document.getElementById("eachRound");


//Counter for score  
let playerScore = 0;
let computerScore = 0;
let finalScore = 5; //game stops when player or computer reaches 5 pts. 


//Use event listener to attach buttons to player input 
rock.addEventListener("click", function (e) { playGame("rock") });
paper.addEventListener("click", function (e) { playGame("paper") });
scissors.addEventListener("click", function (e) { playGame("scissors") });

//Computer's selection (randomized)
function computerPlay() {
    const computerArr = ['Rock', 'Paper', 'Scissors'];
    const randomPlay = computerArr[Math.floor(Math.random() * computerArr.length)];
    return randomPlay;
}

// Function that determines who wins each game and who wins the game at the end 
function playGame(pick) {
    let computerSelection = computerPlay();
    let playerSelection = pick;

    if (playerSelection === 'paper' && computerSelection === 'Rock') {
        playerScore++;
        eachRound.textContent = `Paper beats scissors. Player earns a point!`
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        computerScore++;
        eachRound.textContent = `Paper beats Rock. Computer earns a point!`
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        playerScore++;
        eachRound.textContent = `Scissors beats Paper. Player earns a point!`
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        computerScore++;
        eachRound.textContent = `Scissors beats Paper. Computer earns a point!`
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        playerScore++;
        eachRound.textContent = `Rock beats Scissors. Player earns a point!`
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        computerScore++;
        eachRound.textContent = `Rock beats Scissors. Computer earns a point!`
    } else if (playerSelection === 'rock' && computerSelection === 'Rock') {
        eachRound.textContent = `It's a tie. Play again!`
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        eachRound.textContent = `It's a tie. Play again!`
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        eachRound.textContent = `It's a tie. Play again!`
    }

    //think of maybe adding this into a seperate function
    if (playerScore === finalScore) {
        eachRound.textContent = `You win. Hooray! Another Game?`
        reset();
    } else if (computerScore === finalScore) {
        eachRound.textContent = `Computer wins. Play Again?`
        reset();
    }
    // console.log(playerSelection, computerSelection)
    // console.log(playerScore, computerScore)
}
function reset() {
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    playerScoreCount.innerHTML = `Player: ${playerScore}`;
    computerScoreCount.textContent = `Computer: ${computerScore}`;
}
//Displays scoreboard and is updated
function updateScore() {
    const playerScoreCount = document.getElementById("playerScore");
    const computerScoreCount = document.getElementById("computerScore");
    playerScoreCount.textContent = `Player: ${playerScore}`;
    computerScoreCount.textContent = `Computer: ${computerScore}`;
}
// function roundWinner() {

// }


//Invoke updateScores() function to return it on UI 
choices.forEach(choices => choices.addEventListener("click", (event) => {
    playGame(event);
    updateScore();
}));

// function gameOver() {
//     if (playerScore === finalScore) {
//         eachRound.textContent = `You win. Hooray!`
//     } else if (computerScore === finalScore) {
//         eachRound.textContent = `Computer wins. Play Again?`
//     }

// }



// *still need to: display the result of each round on UI, properly build UI on HTML/CSS 
//*still need to display winner 
//figure out how to log result of each game on screen. 
//figure out how to log the result of the whole game after game ends.
//figure out how to loop the game
