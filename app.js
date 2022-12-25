const win = 'You win!'
const lose = 'You lose!'

function getComputerChoice(){
  const choices = ['Rock', 'Paper', 'Scissors'];
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  return computerSelection;
}


function playRound(playerSelection, computerSelection) {
  console.log('Computer plays ' + computerSelection)

  var result='draw'

  if (playerSelection==computerSelection){
    return result;
  }

  else
    if (playerSelection=='Paper') {
      result = (computerSelection=='Rock' ? win : lose)
      }

    if (playerSelection=='Rock') {
      result = (computerSelection=='Paper' ? lose : win)
      }

    if (playerSelection=='Scissors') {
      result = (computerSelection=='Paper' ? win : lose)
    }

  return result
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
