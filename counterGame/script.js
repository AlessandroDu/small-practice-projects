/*
if action = up:
    add 1 to number, put value in count element
*/
let number = 0;
paragraph = document.getElementById("count");
paragraph.innerHTML = number;
number = Number(paragraph.innerHTML);

function action(e) {
    const buttonClicked = e.innerHTML;
    console.log(buttonClicked);

    if (buttonClicked === "Up") number += 1;
    if (buttonClicked === "Down") number -= 1;
    if (buttonClicked === "Reset") number = 0;
    console.log(number);

    paragraph.innerHTML = number;
    if (number < 0) {
        paragraph.style.color = "red";
    } else if (number > 0) {
        paragraph.style.color = "aqua";
    } else {
        paragraph.style.color = "black";
    }
}
