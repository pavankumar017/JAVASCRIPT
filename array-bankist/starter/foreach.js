'use strict';
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function (mov, index, array) {
//   if (mov > 0) {
//     console.log('You credited ' + mov + 'in index' + index);
//   } else {
//     console.log('You withdrew ' + mov + ' in index' + index);
//   }
// });

//for each in map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${value} : ${key} : ${map}`);
});

const currencies_unique = new Set(['usd', 'euro', 'yen', 'rs', 'euro']);
currencies_unique.forEach(function (value, key, map) {
  console.log(`${value} : ${key} : ${map}`);
}); // in set key is same as value
