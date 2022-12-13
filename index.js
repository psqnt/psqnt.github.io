class Game {
  constructor() {
    this.survival = level === "survival";
    this.level = false;
    if (!this.survival) {
      this.level = levels[level];
    }
    this.projectiles = [];
    this.enemies = [];
    this.keysDown = {};
    this.keysUp = {};
    this.animationID = null;
    this.particles = [];
    this.items = [];
    this.boundaries = [];
    this.addEventListeners();
    this.paused = true;
  }

  start() {
    this.playMusic();
    this.clearLevel();
    this.spawnPlayer();
    if (!this.survival) {
      this.generateMap();
      this.spawnLevelEnemies();
      this.spawnLevelItems();
    } else {
      this.spawnEndlessEnemies(1000);
      this.spawnEndlessItems(5000);
    }
    this.paused = false;
  }

  animate() {
    if (!this.paused) {
      this.animationID = requestAnimationFrame(this.animate.bind(this));
      this.renderBackground();
      if (this.player.alive) {
        this.updateEntities();
        this.detectCollisions();
      }
    }
  }

  playMusic() {
    if (audio.paused) {
      audio.play();
    }
  }

  drawMap() {
    this.boundaries.forEach((boundary) => {
      boundary.draw();
    });
  }

  clearLevel() {
    this.boundaries = [];
    this.enemies = [];
    this.items = [];
    this.player = null;
    this.projectiles = [];
  }

  generateMap() {
    this.level.boundaries.forEach((boundary) => {
      this.boundaries.push(
        new Boundary(boundary.x, boundary.y, boundary.width, boundary.height)
      );
    });
  }

  setLevelComplete() {
    // if player collides with item level complete
    console.log("complete");
    this.transitionLevel();
    this.start();
  }

  transitionLevel() {
    level++;
    this.level = levels[level];
  }

  showGameOverUI() {
    ui.showGameOver(this.player.score);
  }

  end() {
    this.showGameOverUI(), 5000;
    cancelAnimationFrame(this.animationID);
  }

  detectCollisions() {
    this.boundaries.forEach((boundary) => {
      this.player.getBoundaryCollision(boundary);
    });
    this.enemies.forEach((enemy, enemyIndex) => {
      this.detectPlayerEnemyCollision(enemy);
      this.detectEnemyParticleCollisions(enemy, enemyIndex);
    });
    this.items.forEach((item, itemIndex) => {
      this.detectPlayerItemCollision(item, itemIndex);
    });
  }

  detectPlayerEnemyCollision(enemy) {
    if (this.player.getEntityCollision(enemy)) {
      this.spawnParticles(this.player);
      this.player.unalive();
      this.end();
    }
  }

  detectPlayerItemCollision(item, itemIndex) {
    if (this.player.getEntityCollision(item)) {
      this.updatePlayerScore(500);
      this.destroyItem(itemIndex);
      this.player.enablePowerUp(item);
      if (!this.survival) {
        this.paused = true;
        this.setLevelComplete();
      }
    }
  }

  detectEnemyParticleCollisions(enemy, enemyIndex) {
    this.projectiles.forEach((projectile, particleIndex) => {
      const distance = Math.hypot(
        projectile.x - enemy.x,
        projectile.y - enemy.y
      );
      if (distance - enemy.radius - projectile.radius < 1) {
        let points = 100;
        this.spawnParticles(enemy);
        if (enemy.radius > 10) {
          enemy.shrink();
          this.destroyParticle(particleIndex);
        } else {
          points = 200;
          this.destroyEnemy(enemyIndex);
        }
        this.updatePlayerScore(points);
      }
    });
  }

  destroyEnemy(index) {
    setTimeout(() => {
      this.enemies.splice(index, 1);
    }, 0);
  }

  destroyItem(index) {
    setTimeout(() => {
      this.items.splice(index, 1);
    }, 0);
  }

  destroyParticle(index) {
    setTimeout(() => {
      this.projectiles.splice(index, 1);
    }, 0);
  }

  renderBackground() {
    ctx.fillStyle = "rgb(0, 0, 0)"; //"rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  updatePlayerScore(points) {
    this.player.score += points;
    this.updateScoreUI();
  }

  updateScoreUI() {
    ui.updateGameScoreUI(this.player.score);
  }

  updateEntities() {
    this.drawMap();
    this.player.update();
    this.updateProjectiles();
    this.updateEnemies();
    this.updateParticles();
    this.updateItems();
  }

  updateEnemies() {
    this.enemies.forEach((enemy) => {
      enemy.update();
    });
  }

  updateItems() {
    this.items.forEach((item) => {
      item.update();
    });
  }

  updateProjectiles() {
    this.projectiles.forEach((projectile, index) => {
      projectile.update();
      if (
        projectile.x + projectile.radius < 0 ||
        projectile.x - projectile.radius > canvas.width ||
        projectile.y + projectile.radius < 0 ||
        projectile.y - projectile.radius > canvas.height
      ) {
        setTimeout(() => {
          this.projectiles.splice(index, 1);
        }, 0);
      }
    });
  }

  updateParticles() {
    this.particles.forEach((particle, particleIndex) => {
      if (particle.getLifeOver()) {
        this.particles.splice(particleIndex, 1);
      } else {
        particle.update();
      }
    });
  }

  spawnLevelEnemies() {
    this.level.enemies.forEach((enemy) => {
      this.enemies.push(
        new PathedMovingEnemy(
          enemy.x,
          enemy.y,
          enemy.radius,
          enemy.color,
          enemy.velocity,
          enemy.coordinates
        )
      );
    });
  }

  spawnLevelItems() {
    this.level.items.forEach((item) => {
      const j = new Item(item.x, item.y, item.radius, item.color);
      setTimeout(() => {
        this.items.push(j);
      }, 0);
    });
  }

  spawnParticles(enemy) {
    for (let i = 0; i < enemy.radius * 2; i++) {
      const velocity = {
        x: (Math.random() - 0.5) * (Math.random() * 6),
        y: (Math.random() - 0.5) * (Math.random() * 6),
      };
      const radius = Math.random() * 2;
      this.particles.push(
        new Particle(enemy.x, enemy.y, radius, enemy.color, velocity)
      );
    }
  }

  spawnPlayer() {
    if (this.level) {
      let player = this.level.player;
      this.player = new Player(
        player.x,
        player.y,
        player.radius,
        player.color,
        this
      );
    } else {
      this.player = new Player(
        canvas.width / 2,
        canvas.height / 2,
        10,
        "white",
        this
      );
    }
    this.player.draw();
    this.updateScoreUI();
  }

  spawnEndlessItems(rate) {
    setInterval(() => {
      this.spawnEndlessItem();
    }, rate);
  }

  spawnEndlessItem() {
    const radius = 10;
    let x = Math.random() * canvas.width - radius;
    let y = Math.random() * canvas.height - radius;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.items.push(new Item(x, y, radius, color));
  }

  spawnEndlessEnemy() {
    const radius = Math.random() * (30 - 5) + 5;
    let x;
    let y;
    if (Math.random() > 0.5) {
      x = 0 - radius;
      y = Math.random() * canvas.height - radius;
    } else {
      x = Math.random() * canvas.width + radius;
      y = 0 - radius;
    }
    const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
    const angle = Math.atan2(this.player.y - y, this.player.x - x);
    const velocity = {
      x: Math.cos(angle) * (Math.random() * 3),
      y: Math.sin(angle) * (Math.random() * 3),
    };
    this.enemies.push(new Enemy(x, y, radius, color, velocity));
  }

  spawnEndlessEnemies(rate) {
    setInterval(() => {
      this.spawnEndlessEnemy();
    }, rate);
  }

  spawnProjectile(event) {
    const angle = Math.atan2(
      event.clientY - this.player.y,
      event.clientX - this.player.x
    );
    const velocity = { x: Math.cos(angle) * 5, y: Math.sin(angle) * 5 };
    this.projectiles.push(
      new Projectile(this.player.x, this.player.y, 5, "white", velocity)
    );
  }

  addEventListeners() {
    if (this.survival) {
      addEventListener("click", (event) => {
        this.spawnProjectile(event);
      });
    }

    addEventListener(
      "keydown",
      (event) => {
        this.keysDown[event.key] = true;
        delete this.keysUp[event.key];
      },
      false
    );

    addEventListener(
      "keyup",
      (event) => {
        delete this.keysDown[event.key];
        this.keysUp[event.key] = true;
      },
      false
    );
  }
}

// Get the canvas element from html
const canvas = document.querySelector("canvas");

// context is the canvas api - 2d for 2 Dimensional
const ctx = canvas.getContext("2d");

function setupCanvas() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

addEventListener("resize", setupCanvas());

// ui element in html
let level = 1;
const ui = new UI();
ui.showMainMenu();

// music
const musicFile = "./punch-deck-brazilian-street-fight.mp3";
let audio = new Audio(musicFile);

function startGame() {
  ui.hideMainMenu();
  ui.hideLevelSelectMenu();
  const game = new Game();
  game.start();
  game.animate();
}

gameOverMenuButton.addEventListener("click", () => {
  ui.hideGameOver();
  ui.showMainMenu();
});

levelSelectButton.addEventListener("click", () => {
  ui.hideMainMenu();
  ui.showLevelSelectMenu();
});

levelSelectMenuButton.addEventListener("click", () => {
  ui.hideLevelSelectMenu();
  ui.showMainMenu();
});

optionsButton.addEventListener("click", () => {
  ui.hideMainMenu();
  ui.showOptionsMenu();
});

optionsMenuButton.addEventListener("click", () => {
  ui.hideOptionsMenu();
  ui.showMainMenu();
});

creditsButton.addEventListener("click", () => {
  ui.hideMainMenu();
  ui.showCreditsMenu();
});

creditsMenuButton.addEventListener("click", () => {
  ui.hideCreditsMenu();
  ui.showMainMenu();
});

survivalButton.addEventListener("click", () => {
  level = "survival";
  startGame();
});

level1Button.addEventListener("click", () => {
  level = 1;
  startGame();
});
level2Button.addEventListener("click", () => {
  level = 2;
  startGame();
});
level3Button.addEventListener("click", () => {
  level = 3;
  startGame();
});
level4Button.addEventListener("click", () => {
  level = 4;
  startGame();
});
level5Button.addEventListener("click", () => {
  level = 5;
  startGame();
});
level6Button.addEventListener("click", () => {
  level = 6;
  startGame();
});
level7Button.addEventListener("click", () => {
  level = 7;
  startGame();
});
level8Button.addEventListener("click", () => {
  level = 8;
  startGame();
});
level9Button.addEventListener("click", () => {
  level = 9;
  startGame();
});

// Starts Game
startButton.addEventListener("click", () => {
  level = 1;
  startGame();
});
