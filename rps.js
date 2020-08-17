const buttons = document.querySelectorAll('.buttons');

buttons.forEach((button) => {
  button.addEventListener('click', playerChoice);
})

function playerChoice(e) {
  const playerChoice = e.target.value;
  const robotChoice = computerChoice();
  document.querySelector('#choice').innerHTML = playerChoice;
  var showMe = determineWinner(playerChoice, robotChoice); showWinner(showMe);
}


function computerChoice (){
    const computer = Math.floor(Math.random()*3)+1;
    if (computer == 1) {
        document.getElementById("random").innerHTML = 'rock';
        return 'rock';
    } else if (computer == 2) {
        document.getElementById("random").innerHTML = 'paper';
        return 'paper';
    } else if (computer == 3) {
        document.getElementById("random").innerHTML = 'scissors';
        return 'scissors';
    }
}

function determineWinner(playerChoice, computerChoice){ 
// switch stmts used instead of if statements
switch(playerChoice) {
    case 'rock':
      switch(computerChoice) {
        case 'rock':
          return null;
          break;
        case 'scissors':
          return true;
          break;
        default:
          return false;
          break;
      }
      break;
    case 'paper':
      switch(computerChoice) {
        case 'paper':
          return null;
          break;
        case 'rock':
          return true;
          break;
        default:
          return false;
          break;
      }
    break;
    case 'scissors':
      switch(computerChoice) {
        case 'scissors':
          return null;
          break;
        case 'paper':
          return true;
          break;
        default:
          return false;
          break;
      }
    break;
  }
}

function showWinner(showMe){ 
  console.log(showMe);
switch(showMe) {
    case null:
          document.querySelector('#result').innerHTML = "It's a draw.";
          break;
    case true:
          document.querySelector('#result').innerHTML = "You've won!";
          break;
    case false:
          document.querySelector('#result').innerHTML = "You lost.";
    break;
    }
}