const list = document.querySelector('.output ul');
list.textContent = "";
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for(let station of stations){
    const listItem = document.createElement('li');
    const parts = station.split(';');
    const first = parts[0].slice(0,3);
    const second = parts[1];

    formatted_station = first + ': ' + second;
    listItem.textContent = formatted_station; // MAN: Manchester Piccadilly
    list.appendChild(listItem); 
    
}
