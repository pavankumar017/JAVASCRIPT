'use strict';

let arr = ['pasta', 'pizza', 'rosetto', 'pizza'];

const orderset = new Set(arr);
console.log(orderset); //Since pizza is duplicate it will be displayed only once

console.log('size', orderset.size);

for (const order of orderset) console.log(order);

//use case :
arr = [...orderset];

console.log(arr);
