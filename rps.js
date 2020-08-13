const computer=Math.floor(Math.random()*3);
const rock=document.getElementById('rock').addEventListener("click", game())
const paper=document.getElementById('paper').value
const scissors=document.getElementById('scissors').value

/*
Rock > scissors
Scissors > paper
Paper > rock
*/
function computerChoice (){
    if (computer == 1 return "rock";
} else if {
    computer == 2 return "paper";
} else if {
    computer == 3 return "scissors";
}

function game (user, computer){
    if (rock,scissors) {
        document.getElementById("result").innerHTML (You won!);
    }
    else if (paper,scissors) {
        document.getElementById("result").innerHTML (You Lost &#xe058;);
    }
    else if (scissors, scissors) {
        document.getElementById("result").innerHTML (Draw);
    }
    else if (paper,rock) {
        document.getElementById("result").innerHTML (You won!);
    }
    else if (scissors,rock) {
        document.getElementById("result").innerHTML (You Lost &#xe058;);
    }
    else if (rock,rock) {
        document.getElementById("result").innerHTML (Draw);
    }
    else if (paper,paper) {
        document.getElementById("result").innerHTML (Draw);
    }
    else if (rock,paper) {
        document.getElementById("result").innerHTML (You Lost &#xe058;);
    }
    else if (scissors, paper) {
        document.getElementById("result").innerHTML (You won!);
    }
}