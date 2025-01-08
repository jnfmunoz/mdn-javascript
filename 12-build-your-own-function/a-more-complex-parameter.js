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

    if(msgType === 'warning'){
        msg.style.backgroundImage = 'url(icons/warning.png)';
        panel.style.backgroundColor = 'red';        
    } else if (msgType === 'chat'){
        msg.style.backgroundImage = 'url(icons/chat.png)';
        panel.style.backgroundColor = 'aquario';        
    } else {
        msg.style.paddingLeft = '20px';
    }
}

let btn = document.querySelector('button');

btn.addEventListener ('click', () => 
    displayMessage("Your inbox is almost full — delete some mails", "warning"));
    // displayMessage("Brian: Hi there, how are you today?", "chat"));
