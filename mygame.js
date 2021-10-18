let playerScore = 0;
let computerScore = 0;
// function that will randomly either pick 'Rock', 'Paper' or "Scissors"
function computerPlay() {
    const computerArr = ['Rock', 'Paper', 'Scissors'];
    const randomPlay = computerArr[Math.floor(Math.random() * computerArr.length)];
    return randomPlay;
}
// function that will use playerSelection input and computerSelection as parameters to play a game of Rock Paper Scissors. Counter is set to playerScore and computerScore outside of function. 
function playRound() {
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = computerPlay();
    if (playerSelection === 'paper' && computerSelection === 'Rock') {
        playerScore++;
        console.log("Point awarded to Player. Paper beats Rock!");
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        computerScore++;
        console.log("Point awarded to Computer. Paper beats Rock.");
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        playerScore++;
        console.log("Point awarded to Player. Scissors beat Paper!");
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        computerScore++;
        console.log("Point awarded to Computer. Scissors beat Paper!");
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        playerScore++;
        console.log("Point awarded to Player. Rock beats Scissors!");
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        computerScore++;
        console.log("Point awarded to Computer. Rock beats Scissors!");
    } else if (playerSelection === 'rock' && computerSelection === 'Rock') {
        console.log("No points awarded. It's a tie!");
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        console.log("No points awarded. It's a tie!");
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        console.log("No points awarded. It's a tie!");
    }
}
// function that loops for five rounds of the game and keeps score. Reports the winner or loser at the end. 
function game() {
    // let result = playRound();
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("Player:", playerScore, "Computer:", computerScore);
    }
    if (playerScore > computerScore) {
        alert("You win the game!");
    } else if (playerScore === computerScore) {
        alert("Tie game!");
    } else {
        alert("You lose the game!");
    }
    return "Thank you for playing!"
}
console.log(game());

