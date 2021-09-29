var game = {
  state: 0,
  paused: true,
  action: function() { //this sets what happens when you hit the spacebar
    game.state += 1;
  },
  refreshRate: 20
}

var canvas;
var ctx;

function randomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

//debug options
var recording = false;
var record = [0, 0]

var solids = [ //x, y, width, height
  [-25, -25, 25, 2050], //left border
  [-25, -25, 2050, 25], //top border
  [2000, -25, 25, 2050], //right border
  [-25, 2000, 2050, 25], //bottom border
  [300, 575, 250, 150], //pond
  [750, 350, 200, 50],
  [975, 350, 200, 50],
  [1200, 350, 200, 50],
  [1075, 1050, 25, 25],
  [675, 1175, 200, 25],
  [325, 1175, 200, 25],
  [1350, 1325, 200, 25]
]

var entities = [
  { //example
    x: 189,
    y: 411,
    width: 25,
    height: 25,
    speed: 2,
    color: randomColor(),
    state: 0
  }
];

var player = {
  x: 200,
  y: 25,
  width: 25,
  height: 25,
  color: randomColor(),
  speed: 3,
  offsetX: 250,
  offsetY: 250,
  keys: { //this is so player movement is smooth
    left: false,
    up: false,
    right: false,
    down: false
  },
  move: function() {
    if (this.keys.left == true) {
      if (!checkSolids().r) {
        this.x -= this.speed;
      }
    }
    if (this.keys.up == true) {
      if (!checkSolids().d) {
        this.y -= this.speed;
      }
    }
    if (this.keys.right == true) {
      if (!checkSolids().l) {
        this.x += this.speed;
      }
    }
    if (this.keys.down == true) { 
      if (!checkSolids().u) {
        this.y += this.speed;
      }
    }
  }
}