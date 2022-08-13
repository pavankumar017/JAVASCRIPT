'use strict ';

const x = new Array(5);
console.log(x);

console.log(x.fill(1)); //[1, 1, 1, 1, 1]

console.log(x.fill(2, 3)); // [1, 1, 1, 2, 2]

console.log(x.fill(3, 1, 3)); //[1, 3, 3, 2, 2]

//Array.from()

const y = Array.from({ length: 5 }, (val, i) => i + 1);
console.log('from', y);
