class Entity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class RoundEntity extends Entity {
  constructor(x, y, radius, color) {
    super(x, y);
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.draw();
  }
}

class RoundMovingEntity extends RoundEntity {
  constructor(x, y, radius, color, velocity) {
    super(x, y, radius, color);
    this.velocity = velocity;
  }

  update() {
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
    this.draw();
  }
}

class Player extends RoundEntity {
  constructor(x, y, radius, color, game) {
    super(x, y, radius, color);
    this.spawnLocation = { x: x, y: y };
    this.baseSpeed = 256;
    this.baseColor = "white";
    this.speed = this.baseSpeed;
    this.maxVelocity = 4;
    this.minVelocity = -4;
    this.acceleration = 0.05;
    this.diagonalAccelMultiplier = 0.67;
    this.velocity = {
      x: 0.0,
      y: 0.0,
    };
    this.friction = 0.99;
    this.score = 0;
    this.game = game;
    this.alive = true;
    this.powerUp = false;
    this.lives = 0;
  }

  reset() {
    this.x = this.spawnLocation.x;
    this.y = this.spawnLocation.y;
    this.velocity.x = 0;
    this.velocity.y = 0;
  }
  draw() {
    if (this.alive) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  update() {
    this.draw();
    this.move();
    if (this.speed > this.baseSpeed) {
      this.speed -= 1;
    }
    if (this.color !== this.baseColor && this.speed == this.baseSpeed) {
      this.color = this.baseColor;
    }
  }

  move() {
    if (this.diagonallyRightUp()) {
      this.changeVelocityDiagonallyRightUp(this.acceleration);
    }
    if (this.diagonallyRightDown()) {
      this.changeVelocityDiagonallyRightDown(this.acceleration);
    }
    if (this.diagonallyLeftDown()) {
      this.changeVelocityDiagonallyLeftDown(this.acceleration);
    }
    if (this.diagonallyLeftUp()) {
      this.changeVelocityDiagonallyLeftUp(this.acceleration);
    }
    if (
      this.rightKeyDown() &&
      !this.diagonallyRightUp() &&
      !this.diagonallyRightDown()
    ) {
      this.increaseVelocityX(this.acceleration);
    }
    if (
      this.leftKeyDown() &&
      !this.diagonallyLeftDown() &&
      !this.diagonallyLeftUp()
    ) {
      this.decreaseVelocityX(this.acceleration);
    }
    if (
      this.upKeyDown() &&
      !this.diagonallyLeftUp() &&
      !this.diagonallyRightUp()
    ) {
      this.increaseVelocityY(this.acceleration);
    }
    if (
      this.downKeyDown() &&
      !this.diagonallyLeftDown() &&
      !this.diagonallyRightDown()
    ) {
      this.decreaseVelocityY(this.acceleration);
    }
    this.applyFrictionToVelocity();
    if (this.hasHitRightWall()) {
      this.setXVelocityNegative();
    }
    if (this.hasHitLeftWall()) {
      this.setXVelocityPositive();
    }
    if (this.hasHitBottomWall()) {
      this.setYVelocityNegative();
    }
    if (this.hasHitTopWall()) {
      this.setYVelocityPositive();
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  setXVelocityNegative() {
    this.velocity.x = Math.abs(this.velocity.x) * -1 * 0.75;
  }

  setXVelocityPositive() {
    this.velocity.x = Math.abs(this.velocity.x) * 0.75;
  }

  setYVelocityNegative() {
    this.velocity.y = Math.abs(this.velocity.y) * -1 * 0.75;
  }

  setYVelocityPositive() {
    this.velocity.y = Math.abs(this.velocity.y) * 0.75;
  }

  hasHitRightWall() {
    if (this.x > canvas.width - this.radius) {
      return true;
    }
    return false;
  }

  hasHitLeftWall() {
    if (this.x < 0 + this.radius) {
      return true;
    }
    return false;
  }

  hasHitTopWall() {
    if (this.y < 0 + this.radius) {
      return true;
    }
    return false;
  }

  hasHitBottomWall() {
    if (this.y >= canvas.height - this.radius) {
      return true;
    }
    return false;
  }

  applyFrictionToVelocity() {
    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;
  }

  changeVelocityDiagonallyRightUp(acceleration) {
    const slowedAcceleration = acceleration * this.diagonalAccelMultiplier;
    this.increaseVelocityX(slowedAcceleration);
    this.increaseVelocityY(slowedAcceleration);
  }
  changeVelocityDiagonallyRightDown(acceleration) {
    const slowedAcceleration = acceleration * this.diagonalAccelMultiplier;
    this.increaseVelocityX(slowedAcceleration);
    this.decreaseVelocityY(slowedAcceleration);
  }
  changeVelocityDiagonallyLeftDown(acceleration) {
    const slowedAcceleration = acceleration * this.diagonalAccelMultiplier;
    this.decreaseVelocityX(slowedAcceleration);
    this.decreaseVelocityY(slowedAcceleration);
  }
  changeVelocityDiagonallyLeftUp(acceleration) {
    const slowedAcceleration = acceleration * this.diagonalAccelMultiplier;
    this.decreaseVelocityX(slowedAcceleration);
    this.increaseVelocityY(slowedAcceleration);
  }
  increaseVelocityX(acceleration) {
    if (this.velocity.x <= this.maxVelocity) {
      this.velocity.x += acceleration;
    }
  }

  decreaseVelocityX(acceleration) {
    if (this.velocity.x >= this.minVelocity) {
      this.velocity.x -= acceleration;
    }
  }

  increaseVelocityY(acceleration) {
    if (this.velocity.y >= this.minVelocity) {
      this.velocity.y -= acceleration;
    }
  }

  decreaseVelocityY(acceleration) {
    if (this.velocity.y <= this.maxVelocity) {
      this.velocity.y += acceleration;
    }
  }

  diagonallyRightUp() {
    if (this.rightKeyDown() && this.upKeyDown()) {
      return true;
    }
    return false;
  }
  diagonallyRightDown() {
    if (this.rightKeyDown() && this.downKeyDown()) {
      return true;
    }
    return false;
  }
  diagonallyLeftUp() {
    if (this.leftKeyDown() && this.upKeyDown()) {
      return true;
    }
    return false;
  }
  diagonallyLeftDown() {
    if (this.leftKeyDown() && this.downKeyDown()) {
      return true;
    }
    return false;
  }

  leftKeyDown() {
    if ("a" in this.game.keysDown) {
      return true;
    }
    return false;
  }

  leftKeyUp() {
    if ("a" in this.game.keysUp) {
      return true;
    }
    return false;
  }

  upKeyDown() {
    if ("w" in this.game.keysDown) {
      return true;
    }
    return false;
  }

  upKeyUp() {
    if ("w" in this.game.keysUp) {
      return true;
    }
    return false;
  }

  rightKeyDown() {
    if ("d" in this.game.keysDown) {
      return true;
    }
    return false;
  }

  rightKeyUp() {
    if ("d" in this.game.keysUp) {
      return true;
    }
    return false;
  }

  downKeyDown() {
    if ("s" in this.game.keysDown) {
      return true;
    }
    return false;
  }

  downKeyUp() {
    if ("s" in this.game.keysUp) {
      return true;
    }
    return false;
  }

  enablePowerUp(item) {
    this.color = item.color;
    this.speed = 512;
  }

  getEntityCollision(entity) {
    const distance_to_player = Math.hypot(this.x - entity.x, this.y - entity.y);
    if (distance_to_player - this.radius - entity.radius < 1) {
      return true;
    }
    return false;
  }

  getBoundaryCollision(boundary) {
    // if (
    //   this.y - this.radius <= boundary.y + boundary.height &&
    //   this.x + this.radius >= boundary.x &&
    //   this.y + this.radius >= boundary.y &&
    //   this.x - this.radius <= boundary.x + boundary.width
    // ) {
    //   console.log("collision");
    //   if (this.leftKeyDown() || this.rightKeyDown()) {
    //     this.velocity.x = -this.velocity.x;
    //   }
    //   if (this.upKeyDown() || this.downKeyDown()) {
    //     this.velocity.y = -this.velocity.y;
    //   }
    // }
    // r1 == player
    // r2 == boundary
    // let dx = boundary.x + boundary.width - (this.x + this.radius);
    // let dy = boundary.y + boundary.radius - (this.x + this.radius);
    // let width = (boundary.width * 2 + this.radius) / 2;
    // let height = (boundary.height * 2 + this.radius) / 2;
    // let crossWidth = width * dy;
    // let crossHeight = height * dx;
    // let collision = "none";
    // if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
    //   if (crossWidth > crossHeight) {
    //     collision = crossWidth > -crossHeight ? "bottom" : "left";
    //   } else {
    //     collision = crossWidth > -crossHeight ? "right" : "top";
    //   }
    // }
    // return collision;
    let testX = this.x;
    let testY = this.y;
    let directionX;
    let directionY;
    if (this.x < boundary.x) {
      testX = boundary.x;
      directionX = "left";
    } else if (this.x > boundary.x + boundary.width) {
      testX = boundary.x + boundary.width;
      directionX = "right";
    }
    if (this.y < boundary.y) {
      testY = boundary.y;
      directionY = "top";
    } else if (this.y > boundary.y + boundary.height) {
      testY = boundary.y + boundary.height;
      directionY = "bottom";
    }
    let distanceX = this.x - testX;
    let distanceY = this.y - testY;
    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < this.radius) {
      if (directionX === "left") {
        // clear key down so player cannot force there way through a wall
        //delete this.game.keysDown["a"];
        if (this.leftKeyDown()) {
          this.increaseVelocityX(this.acceleration * 2);
        }
        this.velocity.x = Math.abs(this.velocity.x) * -1 * 0.75;
      }
      if (directionX === "right") {
        //delete this.game.keysDown["d"];
        if (this.rightKeyDown()) {
          this.decreaseVelocityX(this.acceleration * 2);
        }
        this.velocity.x = Math.abs(this.velocity.x) * 0.75;
      }
      if (directionY === "bottom") {
        //delete this.game.keysDown["w"];
        if (this.upKeyDown()) {
          this.decreaseVelocityY(this.acceleration * 2);
        }
        this.velocity.y = Math.abs(this.velocity.y) * 0.75;
      }
      if (directionY === "top") {
        //delete this.game.keysDown["s"];
        if (this.downKeyDown()) {
          this.increaseVelocityY(this.acceleration * 2);
        }
        this.velocity.y = Math.abs(this.velocity.y) * -1 * 0.75;
      }
    }
  }

  //   function draw(){
  //     ctx.clearRect(0,0,cw,ch);
  //     ctx.fillStyle=rect1.fill;
  //     ctx.fillRect(rect1.x,rect1.y,rect1.w,rect1.h);
  //     ctx.fillStyle=rect2.fill;
  //     ctx.fillRect(rect2.x,rect2.y,rect2.w,rect2.h);
  //     var side=collide(rect1,rect2);
  //     ctx.fillStyle='green'
  //     if(side=='top'){ ctx.fillRect(rect2.x,rect2.y,rect2.w,3); }
  //     if(side=='right'){ ctx.fillRect(rect2.x+rect2.w,rect2.y,3,rect2.h); }
  //     if(side=='bottom'){ ctx.fillRect(rect2.x,rect2.y+rect2.h,rect2.w,3); }
  //     if(side=='left'){ ctx.fillRect(rect2.x,rect2.y,3,rect2.h); }
  //   }

  unalive() {
    this.alive = false;
    this.x = null;
    this.y = null;
  }

  incrementLives() {
    this.lives++;
  }
}

class Item extends RoundEntity {
  constructor(x, y, radius, color, decay) {
    super(x, y, radius, color);
    this.decay = 0.1;
  }
}

class Projectile extends RoundMovingEntity {
  constructor(x, y, radius, color, velocity) {
    super(x, y, radius, color, velocity);
  }
}

class PathedMovingEnemy extends RoundMovingEntity {
  constructor(x, y, radius, color, velocity, coordinates) {
    super(x, y, radius, color, velocity);
    this.coordinates = coordinates;
    this.coordinatesIndex = 0;
    if (this.coordinates.length > 0) {
      this.targetCoordinates = this.coordinates[0];
    }
  }

  update() {
    this.draw();
    if (this.coordinates.length > 0) {
      this.goTo(this.targetCoordinates);
    }
  }

  goTo(coordinates) {
    let targetX = coordinates.x;
    let targetY = coordinates.y;
    if (
      Math.abs(this.x - targetX) < this.velocity.x &&
      Math.abs(this.y - targetY) < this.velocity.y
    ) {
      this.x = targetX;
      this.y = targetY;
      this.targetCoordinates = this.getNextCoordinate();
    } else {
      const angle = Math.atan2(targetY - this.y, targetX - this.x);
      this.x += Math.cos(angle) * this.velocity.x;
      this.y += Math.sin(angle) * this.velocity.y;
    }
  }

  getNextCoordinate() {
    this.coordinatesIndex++;
    if (this.coordinatesIndex >= this.coordinates.length) {
      this.coordinatesIndex = 0;
    }
    return this.coordinates[this.coordinatesIndex];
  }
}

class Enemy extends RoundMovingEntity {
  constructor(x, y, radius, color, velocity) {
    super(x, y, radius, color, velocity);
  }

  shrink() {
    gsap.to(this, {
      radius: this.radius - 5,
    });
    this.radius -= 5;
  }
}

class Particle extends RoundMovingEntity {
  constructor(x, y, radius, color, velocity) {
    super(x, y, radius, color, velocity);
    this.alpha = 1;
    this.friction = 0.97;
  }

  draw() {
    ctx.save(); // special function to access global state
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore(); // close
  }

  update() {
    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
    this.draw();
    this.alpha -= 0.01;
  }

  getLifeOver() {
    if (this.alpha <= 0) {
      return true;
    }
    return false;
  }
}

class Boundary extends Entity {
  constructor(x, y, width, height, color = "blue") {
    super(x, y);
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
