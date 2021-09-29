var cutscenes = {
  first: function(part) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    switch (game.state) {
      case 0:
        ctx.drawImage(document.getElementById("intro"), 0, 0);
        break;
      case 1:
        ctx.drawImage(document.getElementById("intro"), -500, 0);
        break;
      case 2:
        ctx.drawImage(document.getElementById("intro"), -1000, 0);
        break;
      case 3:
        ctx.drawImage(document.getElementById("intro"), -1500, 0);
        break;
      case 4:
        ctx.drawImage(document.getElementById("intro"), 0, -500);
        break;
      case 5:
        ctx.drawImage(document.getElementById("intro"), -500, -500);
        break;
      case 6:
        ctx.drawImage(document.getElementById("intro"), -1000, -500);
        break;
      case 7:
        ctx.drawImage(document.getElementById("intro"), -1500, -500);
        break;
      case 8:
        ctx.drawImage(document.getElementById("intro"), 0, -1000);
        break;
      case 9:
        ctx.drawImage(document.getElementById("intro"), -500, -1000);
        break;
      case 10:
        ctx.drawImage(document.getElementById("intro"), -1000, -1000);
        game.action = function() {};
        game.paused = false;
        renderLoop();
        break;
    }
    if (game.state < 10) {
      window.setTimeout(cutscenes.first, game.refreshRate);
    }
  }
}