function getComputerChoice () {
  let randomNumber = Math.floor(Math.random() * 3);

  let computerChoice;

  switch (randomNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    outcomeText.textContent = "You tied!";
  } 

  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "paper":
          outcomeText.textContent = "You lose! Paper beats Rock";
          computerScore++;
          break;
        case "scissors":
          outcomeText.textContent = "You win! Rock beats Scissors";
          humanScore++;
          break;
      }
    break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          outcomeText.textContent = "You win! Paper beats Rock";
          humanScore++;
          break;
        case "scissors":
          outcomeText.textContent = "You lose! Scissors beats Paper";
          computerScore++;
          break;
      }
    break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          outcomeText.textContent = "You lose! Rock beats Scissors";
          computerScore++;
          break;
        case "paper":
          outcomeText.textContent = "You win! Scissors beats Paper";
          humanScore++;
          break;
      }
    break;
  }
}

function isGameOver (humanScore, computerScore) {
  if (humanScore === 5 || computerScore === 5) {
    return true;
  };
  return false;
};

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const outcomeText = document.querySelector("#outcome");
const currentScore = document.querySelector("#currentScore");

rockButton.addEventListener("click", function() {
  playRound("rock", getComputerChoice());
  currentScore.textContent = `Current Score: You: ${humanScore}   Computer: ${computerScore}`;
  
  if (isGameOver(humanScore, computerScore)) {
    humanScore = 0;
    computerScore = 0;
  }
});

paperButton.addEventListener("click", function() {
  playRound("paper", getComputerChoice());
  currentScore.textContent = `Current Score: You: ${humanScore}   Computer: ${computerScore}`;

  if (isGameOver(humanScore, computerScore)) {
    humanScore = 0;
    computerScore = 0;
  }
});

scissorsButton.addEventListener("click", function() {
  playRound("scissors", getComputerChoice());
  currentScore.textContent = `Current Score: You: ${humanScore}   Computer: ${computerScore}`;

  if (isGameOver(humanScore, computerScore)) {
    humanScore = 0;
    computerScore = 0;
  }
});


