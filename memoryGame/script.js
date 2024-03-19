const numP = document.getElementById("num");
const promptDiv = document.getElementById("prompt");
const container = document.getElementById("container");
const feedback = document.getElementById("feedback");

// create prompt already so value is global
let prompt = document.createElement("input");
prompt.type = "number";

let num = null;
let len;

function getLevel() {
    const easy = document.getElementById("easy").checked;
    const medium = document.getElementById("medium").checked;
    const hard = document.getElementById("hard").checked;
    const genius = document.getElementById("genius").checked;
    
    if (easy) {
        len = 1000;
    } else if (medium) {
        len = 10000;
    } else if (hard) {
        len = 1000000
    } else if (genius) {
        len = 100000000
    }
}


function getNum() {

    getLevel();

    if (num === null) {
        num = Math.floor(len + Math.random() * len * 9);
        numP.innerHTML = num;
    }
}

function dissapear() {
    numP.innerHTML = "";

    // tell user what to do
    let help = document.getElementById("help");
    help.appendChild(document.createTextNode("Insert what you remember..."));

    // put prompt on page
    promptDiv.appendChild(prompt);

    // Create button to submit
    const submit = document.createElement("button");
    submit.innerHTML = "Validate";
    submit.setAttribute("onclick", "validate()");
    container.appendChild(submit);
}

function validate() {
    userNum = Number(prompt.value);

    if (userNum === num) {
        feedback.innerHTML = "You got it!";
    } else {
        feedback.innerHTML = "Wrong!";
    }
}

function reset() {
    location.reload();
}