let browserType = "mozilla";
const length = browserType.length
console.log('browserType.length: ', length);

let retrievedCharacter = browserType[3];
console.log('Retrieving a especific string character: ', retrievedCharacter);

let lastCharacter = browserType[browserType.length-1];
console.log('Retrieving the last character: ', lastCharacter)

// testing if a string contains a substring
if(browserType.includes("zilla")){
    console.log('browserType.includes("zilla"): Found zilla!!');
} else{
    console.log('browserType.includes("zilla"): No zilla found.');
}

// if you want to know if a string starts or ends with a particular substring
if(browserType.startsWith("zilla")){
    console.log('browserType.startsWith("zilla"): Found zilla');
} else {
    console.log('browserType.startsWith("zilla"): No zilla here');
}

if(browserType.endsWith("zilla")){
    console.log('browserType.endsWith("zilla"): Found zilla');
} else {
    console.log('browserType.endsWith("zilla"): No zilla here');
}

// finding the position of a substring in a string
const tagline = "MDN - Resources for developers, by developers";
let indexOf = tagline.indexOf("developers");
console.log('tagline.indexOf("developers"): ', indexOf); // 20

indexOf = tagline.indexOf("x");
console.log('tagline.indexOf("x"): ', indexOf); // -1

const firstOcurrence = tagline.indexOf("developers");
const secondOcurrence = tagline.indexOf("developers", firstOcurrence + 1);

console.log('firstOcurrence: ', firstOcurrence); // 20
console.log('secondOcurrence: ', secondOcurrence); // 35

// extracting a substring from a string
console.log('browserType.slice(1,4): ', browserType.slice(1,4)); // "ozi"
console.log('browserType.slice(2): ', browserType.slice(2)); // zilla

const radData = "My NaMe Is MuD";
console.log('radData.toLowerCase(): ', radData.toLowerCase());
console.log('radData.toUpperCase(): ', radData.toUpperCase());

// update parts of a string
const updated = browserType.replace("moz", "van");

console.log(browserType); // "mozilla"
console.log(updated); // "vanilla"

browserType = browserType.replace("moz", "van");
console.log('browserType.replace("moz", "van"): ', browserType); // vanilla 

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");
console.log(quote); // "To be or not to code"