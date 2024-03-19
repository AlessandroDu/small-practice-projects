/*
const element = Number(document.getElementById("7").innerHTML);

console.log(typeof element);
*/

const display = document.getElementById("display");
let num1 = "";
let operator = "";
let num2 = "";
let res = "";

function makeNum(e) {
    //console.log(e.innerHTML);
    if (operator.length === 0) {
        num1 += e.innerHTML;
        display.innerHTML = num1;
    } else {
        num2 += e.innerHTML;
        display.innerHTML = num2;
    }
    console.log("num1: ", num1, "num2: ", num2);
}

function storeOp(e) {
    if (num1.length !== 0 && num2.length === 0 && operator.length === 0) {
        operator += e.innerHTML;
    } else if (num2.length !== 0) {
        res = calculation();
        operator = e.innerHTML;
        console.log("res: ", res, operator);
    }
    display.innerHTML += operator;
    console.log(operator);
}

function cancel() {
    num1 = "";
    operator = "";
    num2 = "";
    display.innerHTML = "";
    console.log("clear display");
}

function calculation() {
    num1 = Number(num1);
    num2 = Number(num2);

    if (operator === "+") {
        res = num1 + num2;
    } else if (operator === "-") {
        res = num1 - num2;
    } else if (operator === "x") {
        res = num1 * num2;
    } else res = num1 / num2

    display.innerHTML = res;

    // After all calculations, empty the variables
    num1 = res;
    operator = "";
    num2 = "";
}

function result() {
    calculation();
    console.log(res);
}