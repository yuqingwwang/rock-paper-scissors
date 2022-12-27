const choices = ['rock', 'paper', 'scissors']
let userPoints = 0;
let computerPoints = 0;
var capitalized = {
  "rock": "Rock",
  "paper": "Paper",
  "scissors": "Scissors",
  "computer": "Computer",
  "user": "You"
};

function getComputerChoice(){
  /** Computer randomly chooses between the three options.*/
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  /** takes actions from player and computer, returns result for the round*/

  // result message
  let outcome = "It's a draw. Try again. "
  let win = `You win! ${capitalized[playerSelection]
  } beats ${capitalized[computerSelection]}.`
  let lose = `You lose! ${capitalized[computerSelection]
  } beats ${capitalized[playerSelection]}.`

  if (playerSelection == computerSelection){
    return outcome;
  }

  else
    if (playerSelection == 'paper') {
      computerSelection == 'rock' ? userWin('True') : userWin('False');
      computerSelection == 'rock' ? outcome = win : outcome = lose;
      }

    else if (playerSelection == 'rock') {
      computerSelection == 'paper' ? userWin('False') : userWin('True');
      computerSelection == 'paper' ? outcome = lose : outcome = win;
      }

    else if (playerSelection == 'scissors') {
      computerSelection == 'paper' ? userWin('True'): userWin('False');
      computerSelection == 'paper' ? outcome = win : outcome = lose;
    }

  return outcome
}

// selecting the player choice buttons

const matches = document.querySelectorAll("button");

function cleanText(char){
  let element = document.getElementById(char);
  if (element.firstChild) {
    element.removeChild(element.firstChild);
  }
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
  // calling the displayResult function with user choice
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

function userWin(state){
  // winning state is either 'True' or 'False'
  let temp
  winner = ''

  // if user wins
  if (state=='True') {
    userPoints+=1;
    winner = 'user';
    temp = userPoints;
  }
  // if computer wins
  else {
    computerPoints+=1;
    winner = 'computer';
    temp = computerPoints;
  }

  // someone wins: alert and refresh the page
  if (temp>4) {
    alert(`Game Over! The winner is: ${capitalized[winner]}.`);
    location.reload();
  }

  // game goes on, updating the score
  else {
    cleanText(winner);
    const container = document.querySelector(`#${winner}`);
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = temp;
    container.appendChild(content);
  }
}

// reset the game
const resetGame = () => {
  let resetBtn = document.querySelector('#btn--next-round')
  resetBtn.addEventListener('click', () =>
    location.reload());
};

startGame()
resetGame()

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
