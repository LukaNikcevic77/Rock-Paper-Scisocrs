let computerWinsCount = 0;
let playerWinsCount = 0;
let playedRoundsCount = 0;

const body = document.querySelector("body");
const zavrsniDiv = document.querySelector("#reset");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const round = document.querySelector("#round-text");

const playerPoints = document.querySelector(".player-score");
const computerPoints = document.querySelector(".computer-score");

const playerWinsText = document.createElement("h2");
const computerWinsText = document.createElement("h2");
const drawText = document.createElement("h2");

const resetbutton = document.createElement("button");

resetbutton.textContent = "Play Again!";
resetbutton.style.color = "white";
resetbutton.style.backgroundColor = "transparent";
resetbutton.style.border = "2px white solid";
resetbutton.style.borderRadius = "15px";

playerWinsText.textContent = "You were lucky...You win!";
computerWinsText.textContent = "I win because you are unluckiest person alive!";
drawText.textContent = "I'll see you again, but next time will be last time we see each other!";

playerWinsText.style.fontSize = "24px";
playerWinsText.style.textAlign = "center";
playerWinsText.style.color = "green";
playerWinsText.style.fontWeight = "bold";

computerWinsText.style.fontSize = "24px";
computerWinsText.style.textAlign = "center";
computerWinsText.style.color = "red";
computerWinsText.style.fontWeight = "bold";

drawText.style.fontSize = "24px";
drawText.style.textAlign = "center";
drawText.style.color = "white";
drawText.style.fontWeight = "bold";

round.textContent += playedRoundsCount;
playerPoints.textContent = " " + playerWinsCount;
computerPoints.textContent = computerWinsCount + " " + "Computer";


rock.addEventListener("click", Rock);
paper.addEventListener("click", Paper);
scissors.addEventListener("click", Scissors);
resetbutton.addEventListener("click", e = () => window.location.reload());


function Rock(e){

     let compChoice = getComputerChoice();
     
     switch(compChoice){
          case "rock":
               playerWinsCount += 1;
               playerPoints.textContent = " " + playerWinsCount;
               computerWinsCount += 1;
               computerPoints.textContent = computerWinsCount + " " + "Computer";
               break;
          case "scissors":
               playerWinsCount += 1;
               playerPoints.textContent = " " + playerWinsCount;
               break;
          case "paper":
               computerWinsCount += 1;
               computerPoints.textContent = computerWinsCount + " " + "Computer";
               break;
     }

     playedRoundsCount += 1;
     round.textContent = playedRoundsCount;

     if(playedRoundsCount == 5) {
          paper.removeEventListener("click", Paper)
          rock.removeEventListener("click", Rock)
          scissors.removeEventListener("click", Scissors)
          showResult();
     };
     
}

function Paper(e){
     
     let compChoice = getComputerChoice();

     switch(compChoice){

          case "rock":
               playerWinsCount += 1;
               playerPoints.textContent = " " + playerWinsCount;
               break;
          case "paper":
               playerWinsCount += 1;
               playerPoints.textContent = " " + playerWinsCount;
               computerWinsCount += 1;
               computerPoints.textContent = computerWinsCount + " " + "Computer";
               break;
          case "scissors":
               computerWinsCount += 1;
               computerPoints.textContent = computerWinsCount + " " + "Computer";
               break;
     }

     playedRoundsCount += 1;
     round.textContent = playedRoundsCount;

          if(playedRoundsCount == 5) {
               paper.removeEventListener("click", Paper)
               rock.removeEventListener("click", Rock)
               scissors.removeEventListener("click", Scissors)
               showResult();
          };
          

}

function Scissors(e){
     let compChoice = getComputerChoice();

     switch(compChoice){

          case "paper":
               playerWinsCount += 1;
               playerPoints.textContent = " " + playerWinsCount;
               break;
          case "scissors":
               playerWinsCount += 1;
               playerPoints.textContent = " " + playerWinsCount;
               computerWinsCount += 1;
               computerPoints.textContent = computerWinsCount + " " + "Computer";
               break;
          case "rock":
               computerWinsCount += 1;
               computerPoints.textContent = computerWinsCount + " " + "Computer";
               break;
     }

     playedRoundsCount += 1;
     round.textContent = playedRoundsCount;

     if(playedRoundsCount == 5) {
          paper.removeEventListener("click", Paper)
          rock.removeEventListener("click", Rock)
          scissors.removeEventListener("click", Scissors) 
          showResult();
     };
    
}
  


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


function showResult(){

          if(computerWinsCount > playerWinsCount){
        
               zavrsniDiv.appendChild(computerWinsText)
               zavrsniDiv.appendChild(resetbutton);

     }

          else if(computerWinsCount == playerWinsCount){
   
               zavrsniDiv.appendChild(drawText);
               zavrsniDiv.appendChild(resetbutton);

     }

          else {
    
               zavrsniDiv.appendChild(playerWinsText);
               zavrsniDiv.appendChild(resetbutton);

     }

}




