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

    if (computerSelection === userSelection){
 
      console.log("It's a tie!");
      return "tie";
      
      
    }
    else if ((userSelection == "Rock" && computerSelection == "Scissors") 
    || (userSelection == "Paper" && computerSelection == "Rock") 
    ||(userSelection == "Scissors" && computerSelection == "Paper")){
      
     
      console.log(`You win! ${userSelection} beats ${computerSelection}`);
      return "userWins";
     

    }
    else {
      
      console.log(`You lost! ${computerSelection} beats ${userSelection}`);
     
      


    }
    
  }

  function getUserChoice() {
    while (true) { 
      let userSelection = prompt("Enter your choice: ");
      userSelection = userSelection.charAt(0).toUpperCase() + userSelection.slice(1).toLowerCase();
      if (userSelection === "Rock" || userSelection === "Scissors" || userSelection === "Paper") {
        return userSelection;
        break;
      }
      else{
        alert("Invalid choice. Try again!");
      }
    }
  }

  function game(){
    let userScore;
    let compScore;
    let roundNumber = 0;

    while (roundNumber < 5){
      playRound(getComputerChoice(), getUserChoice());
      if(playRound(getComputerChoice(), getUserChoice()) === "tie"){
        userScore += 1;
        compScore += 1;
        roundNumber += 1;
      }
      else if(playRound(getComputerChoice(), getUserChoice()) === "userWins"){
        userScore += 1;
        roundNumber += 1;
      }
      else{
        compScore += 1;
        roundNumber += 1;
      }
    
    

  }

  console.log(`Final score is: ${userScore}:${compScore}`);
}

  game();
