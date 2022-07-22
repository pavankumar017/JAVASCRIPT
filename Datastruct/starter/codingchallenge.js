'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//coding challenge 2

//1.
const scorers = game.scored;
console.log(scorers);

for (const [x, name] of scorers.entries()) {
  console.log(`Goal ${x + 1} : ${name} `);
}

//2.
let avg = 0;
const obj_needed = Object.values(game.odds);
for (const y of obj_needed) {
  avg = avg + y / obj_needed.length;
}
console.log(avg);

//3.

for (const [team, odd] of Object.entries(game.odds)) {
  const str = team === 'x' ? 'Draw' : `victory ${game[team]}`; // When to access multiple objects values with fidd keys

  console.log(`Odd of ${str}  : ${odd}`);
}
