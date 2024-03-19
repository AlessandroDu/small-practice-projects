function getPasswordLength() {
    const length = document.getElementById("length").value;
    return Number(length);
}

function getPasswordProperties() {
    const ids = ["lowercase", "uppercase", "numbers", "special"];
    // create object that takes these as keys and true / false as values
    const properties = {};

    // grab DOM element associated with the ids
    for (const id of ids) {
        // grab the DOM element associated with that id -> id = string of the id of the checkbox we want to grab
        const element = document.getElementById(id);
        // grab id value (true/false) -> store it at the key of this id
        properties[id] = element.checked;
    }

    return properties;
}

function getChars(lowercase = true) {
    // generate chars using their ascii value and return them
    // if lowercase = true, start at value 97, if false, start at 65
    const start = lowercase ? 97 : 65;
    let chars = [];

    for (let i = start; i < start + 26; i++) {
        chars.push(String.fromCharCode(i))
    }

    return chars;
}

function getNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(i);
    }

    return numbers;
}

function getSpecialChars() {
    let special = [];
    let start = 32;
    let end = 126;
    // when i = 47, start = 58, when i = 64, start = 91, when i = 96, start = 123
    for (let i = start; i < end; i++) {
        if (i === 47) i = 58;
        if (i === 64) i = 91;
        if (i === 96) i = 123;
        special.push(String.fromCharCode(i));
    }

    return special;
}

// generate array with all possible and selected chars, to randomly select from 
function selectedChars(props) {
    let allChars = []
    if (props.lowercase) allChars.push(...lowercase);
    if (props.uppercase) allChars.push(...uppercase);
    if (props.numbers) allChars.push(...numbers);
    if (props.special) allChars.push(...special);

    return allChars;
}

// Create a random N° to use as index to choose a random char from char array
function randomChar(pwdArray) {
    const random = Math.floor(Math.random() * pwdArray.length);
    return random;
}

const lowercase = getChars(true);
const uppercase = getChars(false);
const numbers = getNumbers();
const special = getSpecialChars();

function generatePassword() {
    const length = getPasswordLength();
    const properties = getPasswordProperties();
    const pwdArray = selectedChars(properties);

    // generate password
    let pwd = [];
    for (let i = 0; i < length; i++) {
        // randomly select chars from allChars arr and put them in pwd arr
        pwd.push(pwdArray[randomChar(pwdArray)]); // a random index from allChars
    }

    // change password array into a usable string
    const password = pwd.join("");

    // put this pwd in password div
    const pwdDiv = document.getElementById("password");
    pwdDiv.innerHTML = password;

    // style password div a little
    pwdDiv.style.marginTop = "10%";
    pwdDiv.style.backgroundColor = "black";
    pwdDiv.style.color = "white";
}
