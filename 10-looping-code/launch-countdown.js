let output = document.querySelector('.output');
output.innerHTML = '';
let i = 10;

for(i; i >= 0 ; i--){
    const para = document.createElement('p');
    para.textContent = `${i}`;
    output.appendChild(para);
    if(i === 0){
        para.textContent = 'Blast off!';
    } else if(i === 10){
        para.textContent = 'Countdown 10';
    }
}
