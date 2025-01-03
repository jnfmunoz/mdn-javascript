let list = document.querySelector('.output ul');
let totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
let products = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'
];                

for (let i = 0; i <= products.length-1; i++) { 
    let array_split = products[i].split(':');
    let price = Number(array_split[1]);

    total = total + price;
    itemText = array_split[0] + ' — $' + price;

    let listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);