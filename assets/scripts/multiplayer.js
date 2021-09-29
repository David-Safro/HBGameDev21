

/*
var socket = new WebSocket("wss://bitbybit.tk:8080");

socket.onmessage = function(msg) { //message is stringified array of player objects
  entities = JSON.parse(msg);
}

function sendLoop() {
  var msg = {
    x: player.x,
    y: player.y,
    width: player.width,
    height: player.height,
    color: player.color
  }
  msg = JSON.stringify(msg);
  socket.send(msg);
}
*/