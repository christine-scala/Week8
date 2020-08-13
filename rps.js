const computer=Math.floor(Math.random()*3);

/*
function userChoice (){
    var rock=document.getElementById("rock").addEventListener("click", ());
    var paper=document.getElementById("paper").addEventListener("click", ());
    var scissors=document.getElementById("scissors').addEventListener("click", ());
    if (==rock){
    document.getElementById("choice").innerHTML = rock;
    }
    if (==scissors){
    document.getElementById("choice").innerHTML = paper;
    }
    if (==paper){
    document.getElementById("choice").innerHTML = scissors;
    }
}*/

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