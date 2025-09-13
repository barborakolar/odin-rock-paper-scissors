
function getComputerChoice(max) {
    const number = Math.floor(Math.random() * max);
    if (number === 0) return "paper";
    else if (number === 1) return "rock";
    else return "scissors";
}

//console.log(getRandomInt(3));


function getHumanChoice() {
    var answer = prompt("Please enter your choice:").toLowerCase();
    console.log(answer);
}

//getHumanChoice()

let humanScore = 0
let computerScore = 0

//let humanChoice = getHumanChoice();
let humanChoice = prompt("Please enter your choice:").toLowerCase()
let computerChoice = getComputerChoice(3);

console.log(computerChoice)
console.log(humanChoice)

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You won");
        humanScore =+ 1;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lost");
        computerScore =+ 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You won");
        humanScore =+ 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lost");
        computerScore =+ 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You won");
        humanScore =+ 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lost");
        computerScore =+ 1;
    }
    else {
        console.log("It is a draw, play again");
    }
}

playRound(humanChoice, computerChoice)

console.log(humanScore)
console.log(computerScore)