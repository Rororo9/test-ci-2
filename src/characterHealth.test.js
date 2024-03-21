import sort from './characterHealth.js';

test('sort hero array', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortHeroes = sort(heroes);

  const expectedSortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroes).toEqual(expectedSortedHeroes);
});


test('empty hero array', () => {
  const heroes = [];

  const sortHeroes = sort(heroes);

  expect(sortHeroes).toEqual([]);
});
