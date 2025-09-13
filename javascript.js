


function getHumanChoice() {
    var answer = prompt("Please enter your choice:").toLowerCase();
    console.log(answer);
}

//let humanScore = 0
//let computerScore = 0



//console.log(computerChoice)
//console.log(humanChoice)



//playRound(humanChoice, computerChoice)

//console.log(humanScore)
//console.log(computerScore)

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let humanChoice = " ";
    let computerChoice = " ";

    function getComputerChoice(max) {
        const number = Math.floor(Math.random() * max);
        if (number === 0) return "paper";
        else if (number === 1) return "rock";
        else return "scissors";
    }
    function playRound(humanChoice, computerChoice) {
    humanChoice = prompt("Please enter your choice:").toLowerCase();
    computerChoice = getComputerChoice(3);

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You won! Rock vs Scissors");
        humanScore =+ 1;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lost! Rock vs Paper");
        computerScore =+ 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You won! Paper vs Rock");
        humanScore =+ 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lost! Paper vs Scissors");
        computerScore =+ 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You won! Scissors vs Paper");
        humanScore =+ 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lost: Scissorts vs Rock");
        computerScore =+ 1;
    }
    else {
        console.log("It is a draw, play again");
    }
    }

    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);

    if (humanScore > computerScore) {
        console.log("You won the game " + humanScore + " vs " + computerScore);
    }
    else {
        console.log("You lost the game " + humanScore + " vs " + computerScore);
    }

    
}

playGame()