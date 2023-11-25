import GamePlay from '../gameplay';

const gameplay = new GamePlay();

test('Cheking unsuccessful biulding HTMLElement', () => {
  expect(() => gameplay.bindToDOM(null)).toThrow(new Error('HTMLElement is not defined'));
});

test('Cheking unsuccessful biulding DOM', () => {
  expect(() => gameplay.checkBinding(null)).toThrow(new Error('GamePlay not bind to DOM'));
});
