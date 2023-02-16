var playerName = localStorage.getItem('Name');
// use player name as the variable for the name
document.write('');

var text = document.createElement('div');
document.body.appendChild(text);
text.innerHTML = `Hello`;
text.setAttribute('class', 'text');

