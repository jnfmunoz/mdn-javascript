const person = {
    name: {
        first: "Bob",
        last: "Smith",
    },
    age: 32,
};

function logProperty(propertyName){
    console.log(person[propertyName]);
}

console.log(person["age"]); // 32
console.log(person["name"]["first"]); // Bob
logProperty("name"); // ["Bob", "Smith"]
logProperty("age"); // 32
