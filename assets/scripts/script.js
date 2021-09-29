window.onload = function () {
  //canvas setup
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");


  cutscenes.first()
  //renderLoop();
}

//render loop (also the logic loop)
function renderLoop() {
  if (!game.paused) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    player.move(); //move player

    ctx.drawImage(document.getElementById("testmap"), player.offsetX - player.x, player.offsetY - player.y);
    for (var i = 0; i < entities.length; i++) {
      ctx.fillStyle = entities[i].color;
      ctx.fillRect(entities[i].x - (player.x - player.offsetX), entities[i].y - (player.y - player.offsetY), entities[i].width, entities[i].height);
    }

    ctx.fillStyle = player.color;
    ctx.fillRect(player.offsetX, player.offsetY, player.width, player.height);

    ctx.drawImage(document.getElementById("topmap"), player.offsetX - player.x, player.offsetY - player.y);

    document.getElementById("player").innerHTML = "(" + player.x + ", " + player.y + ")";
    document.getElementById("distance").innerHTML = "(" + record[0] + ", " + record[1] + ")";

  }
  window.setTimeout(renderLoop, 20)
}