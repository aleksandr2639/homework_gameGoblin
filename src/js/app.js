import GamePlay from './gameplay';

const gameplay = new GamePlay();
gameplay.bindToDOM(document.querySelector('.container'));

gameplay.build();
