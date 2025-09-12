function getComuperChoice(max) {
    const number = Math.floor(Math.random() * max);
    if (number === 0) return "paper";
    else if (number === 1) return "rock";
    else return "scissors"
}

//console.log(getRandomInt(3));





function getHumanChoice() {
    let answer = prompt("Please enter your choice: ");
}

getHumanChoice()