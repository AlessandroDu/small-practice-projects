const header1 = document.getElementById("h1");
const header2 = document.getElementById("h2");
const header3 = document.getElementById("h3");
const header4 = document.getElementById("h4");
const header5 = document.getElementById("h5");
const header6 = document.getElementById("h6");

function submit() {
    let arr = [];
    let score = null;
    const result = document.getElementById("result");

    for (let i = 1; i <= 18; i++) {
        answer = document.getElementById(i).checked;

        if (answer) arr.push(i);
        console.log(answer);
    }
    console.log(arr);

    // check if all correct numbers are in arr, if so, immediately return the 100% result, same for 0% or an empty array 12, 13, 14&15
    if (arr.includes(1) && arr.includes(2) && arr.includes(3) && arr.includes(4) && arr.includes(7) && arr.includes(12) && arr.includes(13) && arr.includes(14) && arr.includes(15)) {
        header1.style.color = "green";
        header2.style.color = "green";
        header3.style.color = "green";
        header4.style.color = "green";
        header5.style.color = "green";
        header6.style.color = "green";
        result.innerHTML = "You have a score of 100%";
    }

    if (!(arr.includes(1) && arr.includes(2) && arr.includes(3) && arr.includes(4) && arr.includes(7) && arr.includes(12) && arr.includes(13) && arr.includes(14) && arr.includes(15))) {
        header1.style.color = "red";
        header2.style.color = "red";
        header3.style.color = "red";
        header4.style.color = "red";
        header5.style.color = "red";
        header6.style.color = "red";
        result.innerHTML = "You have a score of 0%";
    }

    if (arr.includes(1) && arr.includes(2) && arr.includes(3)) {
        score += 1;
        header1.style.color = "green";
        console.log(score);
    } else header1.style.color = "red";

    if (arr.includes(4)) {
        score += 1;
        header2.style.color = "green";
    } else header2.style.color = "red";

    if (arr.includes(7)) {
        score +=1;
        header3.style.color = "green";
    } else header3.style.color = "red";

    if (arr.includes(12)) {
        score += 1;
        header4.style.color = "green";
    } else header4.style.color = "red";

    if (arr.includes(13)) {
        score += 1;
        header5.style.color = "green";
    } else header5.style.color = "red";

    if (arr.includes(16) && arr.includes(17)) {
        score += 1;
        header6.style.color = "green";
    } else header6.style.color = "red";

    const perc = (score/6) * 100;
    result.innerHTML = `You have a score of ${perc}%`;
    if (perc < 50) {
        result.style.color = "red";
    } else result.style.color = "green";

    let buttonDiv = document.getElementById("buttons");
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("Retry"));
    button.style.backgroundColor = "orange";
    button.setAttribute("onclick", "retry()");
    buttonDiv.appendChild(button);
}

function retry() {
    location.reload();
}