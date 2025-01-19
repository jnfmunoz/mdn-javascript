const ul = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

function addItem(){
    const li = document.createElement('li');
    const btnDelete = document.createElement('button');
    const span = document.createElement('span');

    span.textContent = input.value;
    li.appendChild(span);
    btnDelete.textContent = 'Delete';
    li.appendChild(btnDelete);
    ul.appendChild(li);

    btnDelete.addEventListener('click', function(){
        // li.remove();
        ul.removeChild(li);
    });

    input.value = '';
    input.focus();
}

btn.addEventListener('click', addItem);