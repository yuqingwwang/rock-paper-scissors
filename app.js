const win = 'You win!'
const lose = 'You lose!'

function getComputerChoice(){
  const choices = ['Rock', 'Paper', 'Scissors'];
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  return computerSelection;
}


function playRound(playerSelection, computerSelection) {
  var result="It's a draw."

  if (playerSelection==computerSelection){
    return result;
  }

  else
    if (playerSelection=='Paper') {
      result = (computerSelection=='Rock' ? win : lose)
      }

    else if (playerSelection=='Rock') {
      result = (computerSelection=='Paper' ? lose : win)
      }

    else if (playerSelection=='Scissors') {
      result = (computerSelection=='Paper' ? win : lose)
    }

  result==win ? result += ` ${playerSelection} beats ${computerSelection}.`:
  result += ` ${computerSelection} beats ${playerSelection}.`

  return result
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
