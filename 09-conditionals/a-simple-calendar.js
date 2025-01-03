let select = document.querySelector('select');
let list = document.querySelector('ul');
let h1 = document.querySelector('h1');

select.onchange = function() {
    let choice = select.value;
    let days = 0;
    // AÑADIR CONDICIONAL AQUÍ
    if(choice === 'January' || choice === 'March' || 
        choice === 'May' || choice === 'July' || 
        choice === 'August' ||  choice === 'October' || 
        choice === 'December'){
        days = 31;
    } else if(choice === 'April' || choice === 'June' || 
        choice === 'September' || choice === 'November'){
        days = 30;
    } else if(choice === 'February'){
        days = 28;
    } else{
        days = 31;
    }

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');
