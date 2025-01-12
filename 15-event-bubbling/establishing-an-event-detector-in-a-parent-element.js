const output = document.querySelector('#output');
function handleClick(e) {
    output.textContent += `You clicked on an item ${e.currentTarget.tagName}\n`;
}

const container = document.querySelector('#container');
container.addEventListener('click', handleClick);