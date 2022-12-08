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


function playGame(){
    let compchoice = getComputerChoice();
    let userchoice = window.prompt("Chose one: Rock, Paper, Scissors").toLowerCase();
    console.log(compchoice);
    switch(userchoice){
        case "rock":
            if(compchoice == userchoice){
                return alert("Two rocks are rock solid, it's a draw!")
            }
            else if(compchoice == "paper"){
                return alert("I wraped you up, I win!")
            }
            else {
                return alert("You broke me cause you are harder then steel, I lose!")
            }
        case "paper":
        if(compchoice == userchoice){
            return alert("That's a lot of papaer, maybe we could write something down... It's a draw!")
        }
        else if(compchoice == "scissors"){
            return alert("I cut you up, I win!");
        }
        else {
            return alert("You wraped around me, I lose!");
        }
        case "scissors":
            if(compchoice == userchoice){
                return alert("You're weirdo... It's a draw!");
            }
            else if(compchoice == "rock"){
                     return alert("I break you cause I am harder then steel, I win!");
            }
            else {
                return alert("You cut me up, you win!");
            }
        default:
            alert("Check your spelling you fool!");
            playGame();

    }
}

playGame();