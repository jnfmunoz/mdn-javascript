let list = document.querySelector('.output ul');
let searchInput = document.querySelector('.output input');
let searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let myHistory = [];

searchBtn.onclick = function() {
  // Solo permitiremos que se ingrese un término si la entrada de búsqueda no está vacía.
  if (searchInput.value !== '') {
    myHistory.unshift(searchInput.value);    

    // Vacíe la lista para no mostrar entradas duplicadas. La pantalla
    // se regenera cada vez que se ingresa un término de búsqueda.
    list.innerHTML = '';

    // recorrer el arreglo y mostrar todos los términos de búsqueda en la lista
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      let listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // Si la longitud del arreglo es 5 o más, elimine el término de búsqueda más antiguo
    if (myHistory.length > 5) {
      myHistory.pop();
      // actualiza la lista para que no muestre el último término de búsqueda
      list.removeChild(list.lastChild);
    }

    // vacíe la entrada de búsqueda y enfóquela, listo para ingresar el siguiente término
    searchInput.value = '';
    searchInput.focus();
  }
}