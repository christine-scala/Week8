const computer=Math.floor(Math.random()*4)+1;
// this will only generate 1,2,3  

document.getElementById("rock").onclick = userChoice;
document.getElementById("paper").onclick = userChoice;
document.getElementById("scissors").onclick = userChoice;

function userChoice (){
    var final = this.id;
    document.getElementById("choice").innerHTML = (final)
    }
   /* 
var rock="rock"
var paper="paper"
var scissors="scissors"

*/
// you are assigning variables here, not string values, what i would do is make some vars like this:
// var rock="rock";  and i think this would help with your next function
function computerChoice (){
    if (computer == 1) {
        document.getElementById("random").innerHTML = rock;
    } else if (computer == 2) {
        document.getElementById("random").innerHTML = paper;
    } else if (computer == 3) {
        document.getElementById("random").innerHTML = scissors;
    }
    
}
computerChoice ();

var response = computerChoice();
// you define this function with parameters, but don't call it with those parameters. 
//i would return/assign the return for the computerChoice function to a variable then hand that in, 
//then hand in the user choice as a var too. then i think it will work :)
function game (user, computer){
    
    if (rock,scissors) {
        document.getElementById("result").innerHTML ("You won!");
    }
    else if (paper,scissors) {
        document.getElementById("result").innerHTML ("You Lost &#xe058;");
    }
    else if (scissors, scissors) {
        document.getElementById("result").innerHTML ("Draw");
    }
    else if (paper,rock) {
        document.getElementById("result").innerHTML ("You won!");
    }
    else if (scissors,rock) {
        document.getElementById("result").innerHTML ("You Lost &#xe058;");
    }
    else if (rock,rock) {
        document.getElementById("result").innerHTML ("Draw");
    }
    else if (paper,paper) {
        document.getElementById("result").innerHTML ("Draw");
    }
    else if (rock,paper) {
        document.getElementById("result").innerHTML ("You Lost &#xe058;");
    }
    else if (scissors, paper) {
        document.getElementById("result").innerHTML ("You won!");
    }
}

game();