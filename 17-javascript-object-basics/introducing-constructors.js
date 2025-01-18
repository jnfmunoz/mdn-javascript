function createPerson(name){
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function(){
        console.log(`Hi, I'm ${this.name}`);
    };
    return obj;
}

const salva = createPerson("Salva");
salva.introduceSelf(); // Hi, I'm Salva

const frankie = createPerson("Frankie");
frankie.introduceSelf(); // Hi, I'm Frankie

// Constructors
function Person(name){
    this.name = name;
    this.introduceSelf = function(){
        console.log(`Hi, I'm ${this.name}`);
    };
}

const jim = new Person("Jim");
jim.introduceSelf(); // Hi, I'm Jim
