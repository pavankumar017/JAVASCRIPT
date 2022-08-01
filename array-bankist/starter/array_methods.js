'use strict ';

const arr = [1, 23, 'hi', 'bw'];

console.log(arr.slice(0, 1));
console.log(arr.slice(-1));

//splice
console.log(arr.splice(3)); //also rmoved bw from array
console.log(arr);

const rev = ['a', 'c', 'b', 'd'];

console.log(rev.reverse());

//concat
console.log(arr.concat(rev));

//at method

const arr1 = [23, 24, 21];
console.log(arr1.at(1));
console.log(arr1.at(-1));
