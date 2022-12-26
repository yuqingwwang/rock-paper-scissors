const choices = ['rock', 'paper', 'scissors']
const win = 'You win:'
const lose = 'You lose:'

function getComputerChoice(){
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  let result = "It's a draw."

  if (playerSelection == computerSelection){
    return result;
  }

  else
    if (playerSelection == 'paper') {
      result = (computerSelection == 'rock' ? win : lose)
      }

    else if (playerSelection == 'rock') {
      result = (computerSelection == 'paper' ? lose : win)
      }

    else if (playerSelection == 'scissors') {
      result = (computerSelection == 'paper' ? win : lose)
    }

  result == win ? result += ` ${playerSelection} beats ${computerSelection}.`:
  result += ` ${computerSelection} beats ${playerSelection}.`

  return result
}


function game(){
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(`Round ${i+1}! ` + "What's your choice", "Rock").toLowerCase()
    let computerSelection = getComputerChoice()

    if (!choices.includes(playerSelection)) {
      alert('Please choose from Rock, paper or scissors')
      i--;
    }

    else {
      console.log(playRound(playerSelection, computerSelection))
    }
 }
}

const matches = document.querySelectorAll("button");


function startGame() {
  matches.forEach((selection) => {
    selection.addEventListener('click', () => {
      if (selection.classList.contains('rock')) {
        console.log(playRound('rock', getComputerChoice()));}
      if (selection.classList.contains('paper')) {
        console.log(playRound('paper', getComputerChoice()));}
      if (selection.classList.contains('scissors')) {
        console.log(playRound('scissors', getComputerChoice()));}
    })})}


startGame()
// const rock = document.querySelector('.rock');
// rock.addEventListener('click', () => {
//   alert("Hello World");
// });

// game()
