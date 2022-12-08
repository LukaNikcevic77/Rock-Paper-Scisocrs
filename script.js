function getComputerChoice(){
    let choice = Math.round(Math.random(3.4));
    
    switch(choice){
        case 0:
             return "rock";
        case 1:
             return "scissors"
        case 2: 
             return "paper";
        default:
             return "crap";

    }

}
let computerWins = 0;
let playerWins = 0;
let playedRounds = 0;
function playWithMe(){
while(playedRounds != 5){
     playGame()
}
}

    function playGame(){
    let compchoice = getComputerChoice();
    let userchoice = window.prompt("Chose one: Rock, Paper, Scissors").toLowerCase();
    console.log("Computer chose --- " + compchoice);
    switch(userchoice){
        case "rock":
            if(compchoice == userchoice){
                 alert("Two rocks are rock solid, it's a draw!");
                 alert("Player: " + playerWins + " | Computer: " + computerWins);
                 alert("Round: " + (playedRounds + 1) + " played!");
                  return playedRounds += 1;

            }
            else if(compchoice == "paper"){
                computerWins += 1;
                 alert("I wraped you up, I win!")
                 alert("Player: " + playerWins + " | Computer: " + (computerWins + 1));
                 alert("Round: " + (playedRounds + 1) + " played!");
                 return (playedRounds += 1, computerWins += 1);
            }
            else {
                
                 alert("You broke me cause you are harder then steel, I lose!")
                 alert("Player: " + (playerWins + 1) + " | Computer: " + computerWins);
                 alert("Round: " + (playedRounds + 1) + " played!");
                 return (playerWins += 1, playedRounds += 1);
            }
        case "paper":
        if(compchoice == userchoice){
             alert("That's a lot of papaer, maybe we could write something down... It's a draw!")
             alert("Player: " + playerWins + " | Computer: " + computerWins);
                 alert("Round: " + (playedRounds + 1) + " played!");
             return playedRounds += 1;
            }
        else if(compchoice == "scissors"){
           
             alert("I cut you up, I win!");
             alert("Player: " + playerWins + " | Computer: " + (computerWins + 1));
                 alert("Round: " + (playedRounds + 1) + " played!");
             return  (playedRounds += 1,computerWins += 1);
        }
        else {
            
             alert("You wraped around me, I lose!");
             alert("Player: " + (playerWins + 1) + " | Computer: " + computerWins);
                 alert("Round: " + (playedRounds + 1) + " played!");
            return (playerWins += 1, playedRounds += 1);
        }
        case "scissors":
            if(compchoice == userchoice){
                 alert("You're weirdo... It's a draw!");
                 alert("Player: " + playerWins + " | Computer: " + computerWins);
                 alert("Round: " + (playedRounds + 1) + " played!");
                 return(playedRounds += 1);
            }
            else if(compchoice == "rock"){
                    
                      alert("I break you cause I am harder then steel, I win!");
                      alert("Player: " + playerWins + " | Computer: " + (computerWins + 1));
                 alert("Round: " + (playedRounds + 1) + " played!");
            return (computerWins += 1, playedRounds += 1);
        }
            else {
                
                 alert("You cut me up, you win!");
                 alert("Player: " + (playerWins + 1) + " | Computer: " + computerWins);
                 alert("Round: " + (playedRounds + 1) + " played!");
                return (playerWins += 1, playedRounds += 1);
            }
        default:
            alert("Check your spelling you fool!");
            playGame();

    }
}
function showResult(){
    if(computerWins > playerWins){
        
        
     alert("I win because you are unluckiest person alive!");
}
else if(computerWins == playerWins){
    
     
    alert("I'll see you again, but next time will be last time we see each other!");
}
else {
    
      
     alert("You were lucky! You win!")
}
}



playWithMe();
showResult();