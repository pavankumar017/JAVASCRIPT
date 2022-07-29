'use strict';

const resturant = new Map();
resturant.set('name ', 'classico italiono');
resturant.set(1, 'firenxo');
resturant.set('categories', ['pizza', 'pasta']).set('open', 11);
console.log(resturant);

//to get data in maps

console.log(resturant.get('categories'));

//populate map without set method

const quest = new Map([
  ['question', 'Whats is ur country'],
  [1, 'India'],
  [2, 'Brazil'],
  ['correct', 1],
  [true, 'correct'],
]);

for (const [key, values] of quest) console.log(key);
