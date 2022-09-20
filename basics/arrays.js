'use strict';

// const details = ['Pavan', 26, 'SDE2'];

// console.log(`Name is ${details[0]} and age is ${details[1]} `)

let tip = 0;
const calctip = (bill) =>
  bill >= 50 && bill <= 300 ? (tip = (15 / 100) * bill) : (tip = 0.2 * bill);

let bills = [125, 555, 44];

// const totalbill = (tip, bill )=> tips + bills;

const tip1 = calctip(bills[0]);
const tip2 = calctip(bills[1]);
const tip3 = calctip(bills[2]);
console.log(tip1);
let tips = [tip1, tip2, tip3];

console.log(tips);
