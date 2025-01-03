const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

select.addEventListener('change', () => {
    const choice = select.value;

    if(choice === 'white'){
        update('white', 'black');
    } else if(choice === 'black'){
        update('black', 'white');
    } else if(choice === 'purple'){
        update('purple', 'white');
    } else if(choice === 'yellow'){
        update('yellow', 'purple');
    } else if(choice === 'psychedelic'){
        update('lime', 'purple');
    }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
