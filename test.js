var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width;
var ch = canvas.height;
function reOffset() {
  var BB = canvas.getBoundingClientRect();
  offsetX = BB.left;
  offsetY = BB.top;
}
var offsetX, offsetY;
reOffset();
window.onscroll = function (e) {
  reOffset();
};

var rects = [];
var rect1 = { x: 100, y: 100, w: 85, h: 85, fill: "red" };
var rect2 = { x: 10, y: 10, w: 40, h: 60, fill: "gold" };

draw();

function collide(r1, r2) {
  var dx = r1.x + r1.w / 2 - (r2.x + r2.w / 2);
  var dy = r1.y + r1.h / 2 - (r2.y + r2.h / 2);
  var width = (r1.w + r2.w) / 2;
  var height = (r1.h + r2.h) / 2;
  var crossWidth = width * dy;
  var crossHeight = height * dx;
  var collision = "none";
  //
  if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
    if (crossWidth > crossHeight) {
      collision = crossWidth > -crossHeight ? "bottom" : "left";
    } else {
      collision = crossWidth > -crossHeight ? "right" : "top";
    }
  }
  return collision;
}

function draw() {
  ctx.clearRect(0, 0, cw, ch);
  ctx.fillStyle = rect1.fill;
  ctx.fillRect(rect1.x, rect1.y, rect1.w, rect1.h);
  ctx.fillStyle = rect2.fill;
  ctx.fillRect(rect2.x, rect2.y, rect2.w, rect2.h);
  var side = collide(rect1, rect2);
  ctx.fillStyle = "green";
  if (side == "top") {
    ctx.fillRect(rect2.x, rect2.y, rect2.w, 3);
  }
  if (side == "right") {
    ctx.fillRect(rect2.x + rect2.w, rect2.y, 3, rect2.h);
  }
  if (side == "bottom") {
    ctx.fillRect(rect2.x, rect2.y + rect2.h, rect2.w, 3);
  }
  if (side == "left") {
    ctx.fillRect(rect2.x, rect2.y, 3, rect2.h);
  }
}

addEventListener("mousemove", (e) => {
  // tell the browser we're handling this event
  e.preventDefault();
  e.stopPropagation();

  mouseX = parseInt(e.clientX - offsetX);
  mouseY = parseInt(e.clientY - offsetY);

  rect2.x = mouseX;
  rect2.y = mouseY;

  draw();
});
