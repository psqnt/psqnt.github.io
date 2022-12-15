// Menu Modals
const mainMenuModal = document.querySelector("#menu-modal");
const gameOverMenu = document.querySelector("#game-over-modal");
const levelSelectModel = document.querySelector("#level-select-modal");
const optionsModal = document.querySelector("#options-modal");
const howModal = document.querySelector("#how-modal");
const creditsModal = document.querySelector("#credits-modal");
const gameCompleteModal = document.querySelector("#game-complete-modal");

// Buttons
const startButton = document.querySelector("#start-game-button");
const survivalButton = document.querySelector("#start-survival-button");
const levelSelectButton = document.querySelector("#level-select-button");
const levelSelectMenuButton = document.querySelector(
  "#level-select-menu-button"
);
const optionsButton = document.querySelector("#options-button");
const optionsMenuButton = document.querySelector("#options-menu-button");
const optionsMusicButton = document.querySelector("#options-music-button");
const howButton = document.querySelector("#how-button");
const howMenuButton = document.querySelector("#how-menu-button");
const creditsButton = document.querySelector("#credits-button");
const creditsMenuButton = document.querySelector("#credits-menu-button");
const gameOverMenuButton = document.querySelector("#game-over-menu-button");
const gameCompleteMenuButton = document.querySelector(
  "#game-complete-menu-button"
);

// level select buttons
const level1Button = document.querySelector("#level-1-button");
const level2Button = document.querySelector("#level-2-button");
const level3Button = document.querySelector("#level-3-button");
const level4Button = document.querySelector("#level-4-button");
const level5Button = document.querySelector("#level-5-button");
const level6Button = document.querySelector("#level-6-button");
const level7Button = document.querySelector("#level-7-button");
const level8Button = document.querySelector("#level-8-button");
const level9Button = document.querySelector("#level-9-button");

// Display Info
const gameOverScore = document.querySelector("#game-over-score");
const levelDisplay = document.querySelector("#levelNumber");
const lifeDisplay = document.querySelector("#lives");
const scoreElement = document.querySelector("#score");
const gameCompleteLives = document.querySelector("#game-complete-lives");
const gameCompleteTime = document.querySelector("#game-complete-time");
const gameTimeElapsed = document.querySelector("#time");

// music option display
let musicText = document.querySelector("#music-text");

class UI {
  constructor() {
    this.optionsMusic = true;
  }

  hideGameCompleteMenu() {
    gameCompleteModal.style.display = "none";
  }

  hideHowMenu() {
    howModal.style.display = "none";
  }

  hideCreditsMenu() {
    creditsModal.style.display = "none";
  }

  hideLevelSelectMenu() {
    levelSelectModel.style.display = "none";
  }

  hideMainMenu() {
    mainMenuModal.style.display = "none";
  }

  hideOptionsMenu() {
    optionsModal.style.display = "none";
  }

  hideGameOver() {
    gameOverMenu.style.display = "none";
  }

  showMainMenu() {
    mainMenuModal.style.display = "flex";
  }

  showOptionsMenu() {
    optionsModal.style.display = "flex";
  }

  showGameOver(score) {
    gameOverMenu.style.display = "flex";
    gameOverScore.innerHTML = score;
  }

  showLevelSelectMenu() {
    levelSelectModel.style.display = "flex";
  }

  showCreditsMenu() {
    creditsModal.style.display = "flex";
  }

  showHowMenu() {
    howModal.style.display = "flex";
  }

  showGameCompleteMenu(lives, gameTime) {
    gameCompleteLives.innerHTML = `Total Lives Used: ${lives}`;
    gameCompleteTime.innerHTML = `Time Elapsed: ${gameTime}`;
    gameCompleteModal.style.display = "flex";
  }

  updateGameScoreUI(score) {
    scoreElement.innerHTML = score;
  }

  updateLevelNumber(level) {
    levelDisplay.innerHTML = level;
  }

  updateGameTimeElapsed(milliseconds) {
    gameTimeElapsed.innerHTML = milliseconds;
  }

  updateLifeCount(lives) {
    lifeDisplay.innerHTML = lives;
  }

  toggleMusic() {
    this.optionsMusic = !this.optionsMusic;
    if (this.optionsMusic) {
      musicText.innerHTML = "Music On";
    } else {
      musicText.innerHTML = "Music Off";
    }
  }
}
