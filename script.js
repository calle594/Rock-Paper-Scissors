//Set computer and score variables
let computerScore = 0;
let playerScore = 0;

//select all buttons to be looped through
const buttons = document.querySelectorAll("input");
const playAgain = document.querySelector("#playAgain")

//Computer chooses rock, paper or scissors randomly from RPS array.
function computerPlay() {
	var RPS = ["Rock", "Paper", "Scissors"];
	var random = RPS[Math.floor(Math.random() * RPS.length)];
	return random.toLowerCase();
};

//Argument is button player chooses.
function playRound(playerSelection) {
	let result = "";
	let computerChoice = computerPlay();

	if ((playerSelection === "rock" && computerChoice === "scissors") ||
		(playerSelection === "paper" && computerChoice === "rock") ||
		(playerSelection === "scissors" && computerChoice === "paper")) {

		playerScore += 1;
		result += (`Player wins this round. ${playerSelection} beats ${computerChoice}`);

	} else if (playerSelection === computerChoice) {
		result += (`Tie, you both chose  ${playerSelection}`)
	} else {
		computerScore += 1;
		result += (`Computer wins this round. ${computerChoice} beats ${playerSelection}`)
	}

	if (playerScore === 5) {
		result = "You Win!"
		endGame();
	} else if (computerScore === 5) {
		result = "Computer Wins";
		endGame();
	}

	//Set text areas equal to result of the round
	document.getElementById("result").innerHTML = result;
	document.getElementById("computer-score").innerHTML = computerScore
	document.getElementById("player-score").innerHTML = playerScore
}

//End the game after 5 rounds. Thanos Snap.
function endGame() {
	buttons.forEach(button => {
		button.disabled = true;
	})
}

//Reset button
playAgain.addEventListener('click', () => location.reload());

//loop through buttons and pass value to playRound function.
buttons.forEach(button => button.addEventListener("click", function () {
	playRound(button.value)
}))