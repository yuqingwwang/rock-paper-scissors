const win = 'You win:'
const lose = 'You lose:'

function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors'];
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  return computerSelection;
}


function playRound(playerSelection, computerSelection) {
  var result="It's a draw."

  playerSelection = playerSelection.toLowerCase()

  if (playerSelection==computerSelection){
    return result;
  }

  else
    if (playerSelection=='paper') {
      result = (computerSelection=='rock' ? win : lose)
      }

    else if (playerSelection=='rock') {
      result = (computerSelection=='paper' ? lose : win)
      }

    else if (playerSelection=='scissors') {
      result = (computerSelection=='paper' ? win : lose)
    }

  result==win ? result += ` ${playerSelection} beats ${computerSelection}.`:
  result += ` ${computerSelection} beats ${playerSelection}.`

  return result
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
