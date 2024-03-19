const comparisonP = document.getElementById("comparison");
const scoreP = document.getElementById("score");
const winnerP = document.getElementById("winner");

let round = 0;
let compScore = 0;
let userScore = 0;
let winner = "";

const choices = ["rock", "paper", "scissors"];

function randomNum() {
    return Math.floor(Math.random() * 3);
}

function compare() {
    if (compScore === 3) {
        winner = "computer";
        winnerP.innerHTML = `${winner} won!`;
        return;
    } else if (userScore === 3) {
        winner = "user";
        winnerP.innerHTML = `${winner} won!`;
        return;
    }
}

function addScore(e) {

    if (winner.length === 0) {
        round += 1;

        compare();

        const userChoice = Number(e.id);
        const compChoice = randomNum();
        const paragraph = document.createElement("p");
        paragraph.appendChild(document.createTextNode(`Round ${round}: ${choices[userChoice]} - ${choices[compChoice]}`));
        comparisonP.insertBefore(paragraph, comparisonP.children[0])

        if ((compChoice === 0 && userChoice === 2) || (compChoice === 1 && userChoice === 0) || (compChoice === 2 && userChoice === 1)) {
            compScore += 1;
            console.log("comp", compScore);
        } else {
            userScore += 1;
            console.log("user", userScore);
        }

        compare();

        scoreP.innerHTML = `User vs Computer: ${userScore} - ${compScore}`;
    }
}

function reset() {
    round = 0;
    compScore = 0;
    userScore = 0;
    winner = "";
    location.reload();
}