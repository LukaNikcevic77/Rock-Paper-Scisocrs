let computerWinsCount = 0;
let playerWinsCount = 0;
let playedRoundsCount = 0;

function getComputerChoice(){

     //Because of Math.round anything between 3 and 3.4 will result in 3
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

function playWithMe(){

   while(playedRoundsCount != 5){

     playGame()

   }
}

function playGame(){

    let compChoice = getComputerChoice();
    let userChoice = window.prompt("Chose one: Rock, Paper, Scissors").toLowerCase();
    console.log("Computer chose --- " + compChoice);

    switch(userChoice){

        case "rock":

          if(compChoice == userChoice){

               alert("Two rocks are rock solid, it's a draw!");
               alert("Player: " + playerWinsCount + " | Computer: " + computerWinsCount);
               alert("Round: " + (playedRoundsCount + 1) + " played!");
               return playedRoundsCount += 1;

            }
            
          else if(compChoice == "paper"){

               computerWinsCount += 1;
               alert("I wraped you up, I win!")
               alert("Player: " + playerWinsCount + " | Computer: " + (computerWinsCount + 1));
               alert("Round: " + (playedRoundsCount + 1) + " played!");
               return (playedRoundsCount += 1, computerWinsCount += 1);

            }

          else {
                
               alert("You broke me cause you are harder then steel, I lose!")
               alert("Player: " + (playerWinsCount + 1) + " | Computer: " + computerWinsCount);
               alert("Round: " + (playedRoundsCount + 1) + " played!");
               return (playerWinsCount += 1, playedRoundsCount += 1);

            }

        case "paper":

          if(compChoice == userChoice){

               alert("That's a lot of papaer, maybe we could write something down... It's a draw!")
               alert("Player: " + playerWinsCount + " | Computer: " + computerWinsCount);
               alert("Round: " + (playedRoundsCount + 1) + " played!");
               return playedRoundsCount += 1;

            }

          else if(compChoice == "scissors"){
           
               alert("I cut you up, I win!");
               alert("Player: " + playerWinsCount + " | Computer: " + (computerWinsCount + 1));
               alert("Round: " + (playedRoundsCount + 1) + " played!");
               return (playedRoundsCount += 1,computerWinsCount += 1);

        }

          else {
            
               alert("You wraped around me, I lose!");
               alert("Player: " + (playerWinsCount + 1) + " | Computer: " + computerWinsCount);
               alert("Round: " + (playedRoundsCount + 1) + " played!");
               return (playerWinsCount += 1, playedRoundsCount += 1);

        }

        case "scissors":

          if(compChoice == userChoice){

               alert("You're weirdo... It's a draw!");
               alert("Player: " + playerWinsCount + " | Computer: " + computerWinsCount);
               alert("Round: " + (playedRoundsCount + 1) + " played!");
               return (playedRoundsCount += 1);

            }

          else if(compChoice == "rock"){
                    
               alert("I break you cause I am harder then steel, I win!");
               alert("Player: " + playerWinsCount + " | Computer: " + (computerWinsCount + 1));
               alert("Round: " + (playedRoundsCount + 1) + " played!");
               return (computerWinsCount += 1, playedRoundsCount += 1);

        }

          else {
                
                 alert("You cut me up, you win!");
                 alert("Player: " + (playerWinsCount + 1) + " | Computer: " + computerWinsCount);
                 alert("Round: " + (playedRoundsCount + 1) + " played!");
                 return (playerWinsCount += 1, playedRoundsCount += 1);

            }

        default:

            alert("Check your spelling you fool!");
            playGame();

    }
}
function showResult(){

          if(computerWinsCount > playerWinsCount){
        
               alert("I win because you are unluckiest person alive!");

     }

          else if(computerWinsCount == playerWinsCount){
   
               alert("I'll see you again, but next time will be last time we see each other!");

     }

          else {
    
               alert("You were lucky! You win!")

     }

}



playWithMe();
showResult();