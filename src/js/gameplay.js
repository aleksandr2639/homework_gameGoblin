export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
    this.position = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('HTMLElement is not defined');
    }
    this.container = container;
  }

  build() {
    this.startGame();
    this.drawUI();
  }

  drawUI() {
    this.checkBinding();

    this.container.innerHTML = `
        <h1 class= "title">Game Goblin</h1>
        <div class= "board"></div>
     `;
    this.boardEl = this.container.querySelector('.board');
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      this.boardEl.appendChild(cellEl);
    }
    this.cells = Array.from(this.boardEl.children);
  }

  getRandomPosition() {
    this.index = Math.floor(Math.random() * this.boardSize ** 2);
    if (this.index === this.position) {
      return this.getRandomPosition();
    }
    return this.index;
  }

  addPositionGoblin() {
    this.position = this.getRandomPosition();
    this.cells[this.position].classList.add('goblin');
  }

  removePositionGoblin() {
    this.cells[this.position].classList.remove('goblin');
  }

  startGame() {
    setInterval(() => {
      if (this.position !== null) {
        this.removePositionGoblin();
      } this.addPositionGoblin();
    }, 1000);
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('GamePlay not bind to DOM');
    }
  }
}
