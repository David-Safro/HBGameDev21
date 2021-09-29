//key press event listener
window.addEventListener("keydown", function(event) {
  var key = event.keyCode || event.which;
  if (key == 37 || key == 65) {
    player.keys.left = true;
  }
  if (key == 38 || key == 87) {
    player.keys.up = true;
  }
  if (key == 39 || key == 68) {
    player.keys.right = true;
  }
  if (key == 40 || key == 83) {
    player.keys.down = true;
  }
  if (key == 82 && recording == false) {
    recording = [player.x, player.y];
  }
  if (key == 32) {
    game.action()
  }
});
window.addEventListener("keyup", function(event) {
  var key = event.keyCode || event.which;
  if (key == 37 || key == 65) {
    player.keys.left = false;
  }
  if (key == 38 || key == 87) {
    player.keys.up = false;
  }
  if (key == 39 || key == 68) {
    player.keys.right = false;
  }
  if (key == 40 || key == 83) {
    player.keys.down = false;
  }
  if (key == 82) {
    record = [player.x - recording[0], player.y - recording[1]];
    recording = false;
  }
});