/*
  Square - An html5 game
*/

// create canvas
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.getElementById("game").appendChild(canvas);

var keysDown = {};

document.addEventListener("keydown", function(e){
  keysDown[e.keyCode] = true;
}, false);

document.addEventListener("keyup", function(e){
  delete keysDown[e.keyCode];
}, false);

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y
    this.speed = 128;
  }

  render() {
    context.fillStyle = "#4858FE";
    context.fillRect(this.x, this.y, 16, 16);
  }

  move(modifier) {
    if (37 in keysDown && this.x > 0) {  // left key
      this.x -= this.speed * modifier;
    }
    else if (38 in keysDown && this.y > 0) {  // up key
      this.y -= this.speed * modifier;
    }
    else if (39 in keysDown && this.x < (512 - 16)) {  // right key
      this.x += this.speed * modifier;
    }
    else if (40 in keysDown && this.y < (480 - 16)) {  // down key
      this.y += this.speed * modifier;
    }
  }
};

class Enemy {
  constructor() {
    this.x = spawns[Math.floor(Math.random()*spawns.length)];
    this.y = -16;
    this.speed = Math.floor(Math.random() * 256) + 128;
  }

  render() {
    context.fillStyle = "#c80000";
    context.fillRect(this.x, this.y, 16, 16);
  }

  move(modifier) {
    this.y += this.speed * modifier;
  }

  reset() {
    this.y = -16;
    this.x = spawns[Math.floor(Math.random() * spawns.length)];
    this.speed = Math.floor(Math.random() * 256) + 128;
  }
};

var gameover = false;
var level = 1;
var timeToNextLevel = 10;
var enemies = [];
var spawns = []

var createSpawns = function() {
  var x = 0;
  while(x < canvas.width) {
    spawns.push(x);
    x = x + 16;
  }
};

var resetEnemies = function() {
  enemies.forEach(function(enemy) {
    if (enemy.y > 512) {
      enemy.reset();
    }
  });
};

var renderEnemies = function() {
    enemies.forEach(function(enemy) {
      enemy.render();
    });
};

var moveEnemies = function(modifier) {
  enemies.forEach(function(enemy) {
    enemy.move(modifier);
  });
};

var renderBackground = function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#d3d3d3";
  context.fillRect(0, 0, canvas.width, canvas.height);
};

var renderTextInfo = function() {
  context.fillStyle = "black";
  context.font = "14px Arial";
  context.textAlign = "left";
  context.textBaseline = "top";
  context.fillText("Level: " + level, 10, 10);
  context.fillText("Increase: " + timeToNextLevel, 10, 24);
}

var render = function() {
  renderBackground();
  player.render();
  renderEnemies();
  resetEnemies();
  renderTextInfo();
};

var increaseLevel = function() {
  level = level + 1;
  addEnemy();
};

var timer = function() {
  timeToNextLevel = timeToNextLevel - 1;
  if (timeToNextLevel <= 0) {
    clearInterval(nextLevel);
    timeToNextLevel = 10;
    increaseLevel();
    nextLevel = setInterval(timer, 1000);
  }
};

var addEnemy = function() {
  enemies.push(new Enemy());
};

var checkCollision = function(enemy) {
  if (player.x < enemy.x + 16 && player.x + 16 > enemy.x &&
      player.y < enemy.y + 16 && player.y + 16 > enemy.y) {
    gameover = true;
  }
};

var checkForCollisions = function() {
  enemies.forEach(function(enemy) {
    checkCollision(enemy);
  });
};

var update = function(modifier) {
  if (!gameover) {
    player.move(modifier);
    moveEnemies(modifier);
    checkForCollisions();
  }
};

var main = function() {
  var now = Date.now();
  var delta = now - then;
  update(delta / 1000);
  render();

  then = now;
  if (gameover) {
    alert("Gameover. You made it to level: " + level);
    document.location.reload(true);
  }
  requestAnimationFrame(main);
};

createSpawns();
var nextLevel = setInterval(timer, 1000);
var player = new Player(canvas.width / 2, canvas.height / 2);
var enemy = new Enemy()
enemies.push(enemy);
var then = Date.now();
main();
