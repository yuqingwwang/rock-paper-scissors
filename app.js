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

// selecting the player choice buttons
const matches = document.querySelectorAll("button");

function cleanText(){
  let element = document.getElementById("results");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
function displayResult(hand){
  // clean before displaying new result
  cleanText();
  const container = document.querySelector('#results');
  const content = document.createElement('div');
  content.classList.add('content');
  content.textContent = playRound(hand, getComputerChoice());
  container.appendChild(content);
}

function startGame() {
  matches.forEach((selection) => {
    selection.addEventListener('click', () => {
      if (selection.classList.contains('rock')) {
        displayResult('rock')
      }
      if (selection.classList.contains('paper')) {
        displayResult('paper')
      }
      if (selection.classList.contains('scissors')) {
        displayResult('scissors')
      }
    })})}

startGame()

// old code for the version without GUI
// function game(){
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt(`Round ${i+1}! ` + "What's your choice", "Rock").toLowerCase()
//     let computerSelection = getComputerChoice()

//     if (!choices.includes(playerSelection)) {
//       alert('Please choose from Rock, paper or scissors')
//       i--;
//     }

//     else {
//       console.log(playRound(playerSelection, computerSelection))
//     }
//  }
// }

// game()
