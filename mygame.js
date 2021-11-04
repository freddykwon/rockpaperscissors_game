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


//Use event listener to create event for each button input. 
rock.addEventListener("click", function (e) { playGame("rock") });
paper.addEventListener("click", function (e) { playGame("paper") });
scissors.addEventListener("click", function (e) { playGame("scissors") });

//Computer's selection (randomized).
function computerPlay() {
    const computerArr = ['Rock', 'Paper', 'Scissors'];
    const randomPlay = computerArr[Math.floor(Math.random() * computerArr.length)];
    return randomPlay;
}

// Function that determines who is the winner of each game.
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

    if (playerScore === finalScore) {
        eachRound.textContent = `You win. Hooray! Another Game?`
        reset();
    } else if (computerScore === finalScore) {
        eachRound.textContent = `Computer wins. Play Again?`
        reset();
    }
}
//Function that resets the game and restarts the game. 
function reset() {
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
}
//Function that displays and updates the scoreboard.
function updateScore() {
    const playerScoreCount = document.getElementById("playerScore");
    const computerScoreCount = document.getElementById("computerScore");
    playerScoreCount.textContent = `Player: ${playerScore}`;
    computerScoreCount.textContent = `Computer: ${computerScore}`;
}

choices.forEach(choices => choices.addEventListener("click", (event) => {
    playGame(event);
    updateScore();
}));
