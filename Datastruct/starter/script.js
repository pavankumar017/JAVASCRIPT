'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // enhanced object literal
  openingHours,
};

// //optionla chaining
// console.log(restaurant.openingHours.mon?.open);

// //looping over objects

// const props = Object.keys(openingHours);
// console.log(props);

// for (const days of props) console.log(days);

// // to get entries of objects
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const x of entries) console.log(x);

//Spread operator :
const new_arr = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log('spread', ...new_arr);

//rest operator
const [s, a, ...others] = [...restaurant.starterMenu];
console.log(s);
console.log(a);
console.log(others);

//short Circuiting OR

console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || 0 || 'hello' || null);

const num = 0;

const guest = num || 0;
console.log(guest);

// shORT circuting AND

console.log(0 && 1);
console.log(null && 'hello'); //False And True

//OR assignment operator
const rest1 = {
  name: 'la cavina',
  numguest: 20,
};
const rest2 = {
  name: 'la avina',
};

rest2.numguest |= 10; //Ths is same as rest2.numguest = rest2.numguest || 10.

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

//Createoneplayerarrayforeachteam(variables'players1'and 'players2')
//Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// //1. destructuring
// const [players1, players2] = game.players;

// console.log(players1);

// //2. Using Rest
// const [gk1, ...fieldplayers] = players1;
// console.log('Bayren Munich GK ' + gk1);
// console.log('Bayren Munich Field Players ' + fieldplayers);

// //.3
// const allplayers = [...players1, ...players2];
// console.log(allplayers);

// //.4
// const players1final = [...players1, 'Thiago', 'Couthino', 'Pericic'];
// console.log(players1final);

// //.5

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //.6
// const prntgoals = function (...players) {
//   console.log(`${players.length} goals were score`);
// };

// prntgoals('hela', 'pini');
// prntgoals(...game.scored);

// //.7

//for of loop

// const menu = [...restaurant.starterMenu, , ...restaurant.mainMenu];
// for (const items of menu) console.log(items);
