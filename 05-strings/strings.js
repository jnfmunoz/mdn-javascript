let string = "The revolution will not be televised.";
console.log(string);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

let sglDbl = 'Would you eat a "fish supper"?';
let dblSgl = "I'm feeling blue.";

console.log(sglDbl);
console.log(dblSgl);

let one = "Hello, ";
let two = "how are you?";

let joined = one + two;
console.log(joined);

joined = `${one}${two}`;
console.log(joined);

let multiple = one + one + one + one + two
console.log(multiple);

let response = one + "Im a fine - " + two;
console.log(response);

const userName = "Chris";
const greeting = `Hello, ${userName}`;
console.log(greeting);

const button = document.querySelector("button");

function greet(){
    const person = prompt("What's your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello, ${person}, nice to see you!`;
}

button.addEventListener("click", greet);

const song = "Fight the Youth";
const score = 9;
const highScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
    (score / highScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

let newLine = `One day you finally knew
what you had to do, and began,`;
console.log(newLine);

newLine = "One day you finally knew\nwhat you had to do, and began," // saltos de línea
console.log(newLine);

/*
One day you finally knew
what you had to do, and began,
*/

const description = "Front ";
const number = 242;
console.log(description + number); // "Front 242"

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum); // number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2); // string
