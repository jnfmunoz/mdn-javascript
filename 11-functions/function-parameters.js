// doesn't require any parameters.
// when called, it always returns a random number between 0 and 1
const myNumber = Math.random();
console.log(myNumber);

// replace() function, how ever needs two parameters
// the substring to find in the main string, and the substring to replace that string:
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);

// optional parameters
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString); // returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString); // returns 'I,love,chocolate,frogs'

// default parameters
function hello(name="Chris"){
    console.log(`Hello, ${name}!`);
}

hello('Ari');
hello(); // Hello, Chris!
