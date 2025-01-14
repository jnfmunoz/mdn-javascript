const person = {
    name: {
        first: "Bob",
        last: "Smith",
    },
    age: 32,
};

person.age = 45;
person["name"]["last"] = "Cratchit";

console.log(person["age"]); // 45
console.log(person["name"]["last"]); // Cratchit

person["eyes"] = "hazel";
person.farewell = function() {
    console.log("Bye everybody");
};

console.log(person["eyes"]); // hazel
person.farewell(); // Bye everybody

const myDataName = "height";
const myDataValue = "1.75m";

person[myDataName] = myDataValue;
console.log(person.height); // 1.75m