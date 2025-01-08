function displayMessage(msgText, msgType) {
    let html = document.querySelector('html');

    let panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    let msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    let closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function (){
        panel.parentNode.removeChild(panel);
    };
}

let btn = document.querySelector('button');

btn.addEventListener ('click', () => 
    displayMessage("Woo, this a different message"));