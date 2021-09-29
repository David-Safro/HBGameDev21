//collision detection
function isTouching(x, y, w, h) {
  if (player.x + player.width > x && player.y + player.height > y && player.x < (x + w) && player.y < (y + h)) {
    return true;
  } else {
    return false;
  }
}

//this checks all solid objects at once
function checkSolids() {
  var d = {
    l: false,
    u: false,
    r: false,
    d: false
  }
  for (var i = 0; i < solids.length; i++) {
    var value = renderSolid(solids[i][0], solids[i][1], solids[i][2], solids[i][3], player);
    if (value.left) {
      d.l = true;
    } else if (value.top) {
      d.u = true;
    } else if (value.right) {
      d.r = true;
    } else if (value.bottom) {
      d.d = true;
    }
  }
  for (var i = 0; i < entities.length; i++) {
    var value = renderSolid(entities[i].x, entities[i].y, entities[i].width, entities[i].height, player);
    if (value.left) {
      d.l = true;
    } else if (value.top) {
      d.u = true;
    } else if (value.right) {
      d.r = true;
    } else if (value.bottom) {
      d.d = true;
    }
  }
  return d;
}

function renderSolid(x, y, w, h, entity) {
  var directions = {
    left: false,
    top: false,
    right: false,
    bottom: false
  }

  //hitboxes
  var left = isTouching(x - entity.speed, y, entity.speed, h);
  var top = isTouching(x, y - entity.speed, w, entity.speed);
  var right = isTouching(x + w, y, entity.speed, h);
  var bottom = isTouching(x, y + h, w, entity.speed);

  if (left == true && entity.keys.right == true) {
    entity.x += (x - entity.x) - entity.width;
    directions.left = true;
  } else if (top == true && entity.keys.down == true) {
    entity.y += (y - entity.y) - entity.height;
    directions.top = true;
  } else if (right == true && entity.keys.left == true) {
    entity.x -= entity.x - (x + w);
    directions.right = true;
  } else if (bottom == true && entity.keys.up == true) {
    entity.y -= entity.y - (y + h);
    directions.bottom = true;
  }
  return directions;
}