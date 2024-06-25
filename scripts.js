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

function getHumanChoice () {
  let humanChoice = prompt("Rock, Paper, Scissors?");
  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("You tied!");
  } 

  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "paper":
          console.log("You lose! Paper beats Rock");
          computerScore++;
          break;
        case "scissors":
          console.log("You win! Rock beats Scissors");
          humanScore++;
          break;
      }
    break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("You win! Paper beats Rock");
          humanScore++;
          break;
        case "scissors":
          console.log("You lose! Scissors beats Paper");
          computerScore++;
          break;
      }
    break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          console.log("You lose! Rock beats Scissors");
          computerScore++;
          break;
        case "paper":
          console.log("You win! Scissors beats Paper");
          humanScore++;
          break;
      }
    break;
  }
}
