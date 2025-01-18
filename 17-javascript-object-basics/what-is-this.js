const person1 = {
    name: 'Chris',
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

const person2 = {
    name: 'Deepti',
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

person1.introduceSelf(); // Hi! I'm Chris
person2.introduceSelf(); // Hi! I'm Deepti
