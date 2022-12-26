const choices = ['rock', 'paper', 'scissors']
const win = 'You win:'
const lose = 'You lose:'

function getComputerChoice(){
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  let aus = "It's a draw."
  var result

  if (playerSelection == computerSelection){
    return aus;
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
  result == win ? userWin('True'):userWin('False')

  result == win ? aus = ` ${playerSelection} beats ${computerSelection}.`:
  aus = ` ${computerSelection} beats ${playerSelection}.`

  return aus
}

// selecting the player choice buttons

const matches = document.querySelectorAll("button");

function cleanText(char){
  let element = document.getElementById(char);
  if (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  console.log(element)
}

function displayResult(hand){
  // clean before displaying new result
  cleanText("results");
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


let userPoints = 0;
let computerPoints = 0;

function userWin(state){
  let temp
  winner = ''
  // if user wins
  if (state=='True') {
    userPoints+=1;
    winner = 'user'
    temp = userPoints
  }
  // if computer wins
  else {
    computerPoints+=1;
    winner = 'computer'
    temp = computerPoints;
  }

  cleanText(winner);
  const container = document.querySelector(`#${winner}`);
  const content = document.createElement('div');
  content.classList.add('content');
  content.textContent = temp;
  container.appendChild(content);
}

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
