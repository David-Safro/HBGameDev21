var cutscenes = {
  first: function(part) {
    switch (part) {
      case 0:
        ctx.drawImage(document.getElementById("intro"), 0, 0);
      case 1:
        ctx.drawImage(document.getElementById("intro"), -500, 0);
      case 2:
        ctx.drawImage(document.getElementById("intro"), -1000, 0);
      case 3:
        ctx.drawImage(document.getElementById("intro"), -1500, 0);
      case 4:
        ctx.drawImage(document.getElementById("intro"), 0, -500);
      case 5:
        ctx.drawImage(document.getElementById("intro"), -500, -500);
      case 6:
        ctx.drawImage(document.getElementById("intro"), -1000, -500);
      case 7:
        ctx.drawImage(document.getElementById("intro"), -1500, -500);
      case 8:
        ctx.drawImage(document.getElementById("intro"), 0, -1000);
      case 9:
        ctx.drawImage(document.getElementById("intro"), -500, -1000);
  }
  game.action = cutscenes.first(part + 1);
      
  }
}