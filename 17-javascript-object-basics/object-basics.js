const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function(){
        console.log(`Hi I'm ${this.name[0]}`);
    }
};

console.log(person.name); // ['Bob', 'Smith']
console.log(person.name[0]); // Bob
console.log(person.age); // 32
person.bio(); // 'Bob Smith is 32 years old'
person.introduceSelf(); // 'Hi I'm Bob'
