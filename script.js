function startGame() {
  var playerName = document.getElementById("nameBox").value;
  if (playerName == '') {
    playerName = 'Bob';
  }
  localStorage.setItem('Name', playerName);
  
};  


// this works for our code as well: document.write("<h2>Hello World!</h2><p>Have a nice day!</p><hr>");



