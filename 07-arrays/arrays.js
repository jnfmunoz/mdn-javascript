let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);

let sequence = [1,2,3,5,8,13];
console.log(sequence);

let random = ["tree", 795, [0,1,2]];
console.log(random);

console.log(shopping[0]); // bread
shopping[0] = "tahini";
console.log(shopping);

console.log(random[2][2]); // 2

let sequence_length = sequence.length;
console.log('sequence_length: ', sequence_length); // 7

for(let i=0; i < sequence_length; i++){
    console.log(sequence[i]);
}

let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let myArray = myData.split(",");
console.log(myArray);

console.log(myArray.length);
console.log(myArray[0]); // el primer elemento del arreglo
console.log(myArray[1]); // el segundo elemento del arreglo
console.log(myArray[myArray.length - 1]); // el último elemento del arreglo

let myNewString = myArray.join(","); // array into string
console.log(myNewString);

let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString()); // Rocket,Flash,Bella,Slugger

myArray.push("Cardiff");
console.log(myArray);

myArray.push("Bradford", "Brighton");
console.log(myArray);

// la nueva longitud del arreglo se devuelve cuando finaliza la llamada al método
let newLength = myArray.push("Bristol"); 
console.log(newLength);
console.log(myArray);

// el elemento que sé eliminó se devuelve cuando se completa la llamada al método
let removedItem = myArray.pop();
console.log(removedItem);
console.log(myArray);

// unshift() y shift() funcionan exactamente igual de push() y pop(), 
// respectivamente, excepto que funcionan al principio del arreglo
myArray.unshift("Edinburgh");
console.log(myArray);

myArray.shift();
console.log(myArray);
