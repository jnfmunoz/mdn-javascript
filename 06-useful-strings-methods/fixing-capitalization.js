let list = document.querySelector('.output ul');
list.innerHTML = '';

let cities = [
    'lonDon', 
    'ManCHESTer', 
    'BiRmiNGHAM', 
    'liVERpoOL'
];

for(let citie of cities){
    const listItem = document.createElement('li');
    formatted_citie = citie.charAt(0).toUpperCase() + citie.slice(1).toLowerCase();
    listItem.textContent = formatted_citie;
    list.appendChild(listItem);
    
}

