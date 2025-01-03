const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for(const cat of cats){
    console.log(cat);
}

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

const nameCats = ['Pete', 'Biggies', 'Jasmine'];

let myFavoriteCats = "My cats are called ";

for (const cat of nameCats) {
    myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "

for (let i = 0; i < nameCats.length; i++) {
    if (i === nameCats.length - 1) {
      // Estamos al final del arreglo
      myFavoriteCats += `y ${nameCats[i]}.`;
    } else {
      myFavoriteCats += `${nameCats[i]}, `;
    }
}
  
console.log(myFavoriteCats); // "Mis gatos se llaman Pete, Biggles y Jasmine."