function getComputerChoice () {
  randomNumber = Math.floor(Math.random() * 3);

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
  humanChoice = prompt("Rock, Paper, Scissors?");
  return humanChoice.toLowerCase();
}

