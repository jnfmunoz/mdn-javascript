const output = document.querySelector('#output');

function handleClick(e) {
    output.textContent += `You clicked on an item ${e.currentTarget.tagName}\n`;
}

const container = document.querySelector('#container');
const button = document.querySelector('button');

document.body.addEventListener('click', handleClick, {capture: true});
container.addEventListener('click', handleClick, {capture: true});
button.addEventListener('click', handleClick);
