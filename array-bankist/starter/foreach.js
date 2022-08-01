'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (mov, index, array) {
  if (mov > 0) {
    console.log('You credited ' + mov + 'in index' + index);
  } else {
    console.log('You withdrew ' + mov + ' in index' + index);
  }
});
