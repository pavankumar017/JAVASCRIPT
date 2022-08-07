'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euro_to_usd = 1.1;

// // const move = movements.map(function (val) {
// //   return val * euro_to_usd;

// // });

// //with arrow funct map
// const move = movements.map(val => val * euro_to_usd);

// console.log(movements);
// console.log(move);

// movements.map((val, i, arr) => console.log(val, i, arr));

//filter method
// const deposits = movements.filter(money => money > 0);
// console.log(deposits);

// const withdrawals = movements.filter(money => money < 0);
// console.log(withdrawals);

//Reduce method

const bal = movements.reduce(
  (accumalator, current, i, arr) => accumalator + current,
  9890908
); //initiator value of acc
console.log(bal);

//CHANINING ALL THREE

const total_dep = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((acc, mov) => acc + mov);

console.log(total_dep);
