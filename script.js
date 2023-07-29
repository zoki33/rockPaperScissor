var userScore = 0;
var compScore = 0;
var roundNumber = 0;

const container = document.querySelector('#container');
const score = document.createElement('div');
const winner = document.createElement('div');
score.classList.add('score');
winner.classList.add('winner');
score.textContent = "0 : 0";
container.appendChild(score);
container.appendChild(winner);

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
      return "Rock"
    }
    else if (x == 1) {
      return "Scissors"
    }
    else {
      return "Paper"
    }
  }

  function playRound(computerSelection, userSelection) {

    var buttons = document.querySelectorAll('button');



    if (computerSelection === userSelection){
 
      userScore += 1;
      compScore += 1;
      roundNumber += 1;
      score.innerText = `${userScore} : ${compScore}`;
      
      
      
      
    }
    else if ((userSelection == "Rock" && computerSelection == "Scissors") ||
    (userSelection == "Paper" && computerSelection == "Rock") ||
    (userSelection == "Scissors" && computerSelection == "Paper")){
      
     
      userScore += 1;
      roundNumber += 1;
      score.innerText = `${userScore} : ${compScore}`;
      
     

    }
    else {
      
      compScore += 1;
      roundNumber += 1;
      score.innerText = `${userScore} : ${compScore}`;
     
     
      


    }

    if(roundNumber == 5){
      buttons.forEach((button) => {
        button.disabled = true
      });

      if(userScore > compScore){
        winner.innerText = "You win! You have prevailed over technology!"
      }

      else if(compScore > userScore){
        winner.innerText = "You lose. Computer prevailed!"
      }

      else{
        winner.innerText = "It's a tie. Try harder next time!"
      }




    
  }
}
  

  function getUserChoice() {
    
    var btnSci = document.querySelector('#sci');
    btnSci.addEventListener('click', () => {playRound(getComputerChoice(), "Scissors")});

    var btnRock = document.querySelector('#rock');
    btnRock.addEventListener('click', () => {playRound(getComputerChoice(), "Rock")});

    var btnPaper = document.querySelector('#paper');
    btnPaper.addEventListener('click', () => {playRound(getComputerChoice(), "Paper")});

    
  }
    
  


 getUserChoice();

