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
      if (computerSelection=='Rock') {
        result = 'You win!'
      }
      else {
        result = 'You lose!'
      }
    }

    if (playerSelection=='Rock') {
      if (computerSelection=='Paper') {
        result = 'You lose!'
      }
      else {
        result = 'You win!'
      }
    }

    if (playerSelection=='Scissors') {
      if (computerSelection=='Paper') {
        result = 'You win!'
      }
      else {
        result = 'You lose!'
      }
    }
  return result
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
