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
    }
    else if ((userSelection == "Rock" && computerSelection == "Scissors") 
    || (userSelection == "Paper" && computerSelection == "Rock") 
    ||(userSelection == "Scissors" && computerSelection == "Paper")){
      
      console.log(`You win! ${userSelection} beats ${computerSelection}`);

    }
    else {
      console.log(`You lost! ${computerSelection} beats ${userSelection}`);
    }
    
  }

  function getUserChoice() {
    while (true) { 
      userSelection = prompt("Enter your choice: ");
      if (userSelection === "Rock" || userSelection === "Scissors" || userSelection === "Paper") {
        return userSelection;
        break;
      }
      else{
        alert("Invalid choice. Try again!");
      }
    }
  }



  playRound(getComputerChoice(), getUserChoice())