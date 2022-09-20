'use strict';

// function average(){
//     const sum = simple_adder(2,3)  //function expression
//     console.log(sum)
//     return sum/2 ;
// }

// function simple_adder(a, b){
//     return a + b ;

// }

// simple_adder(2 ,3);
// simple_adder(-2, -19)

// //arrow functin
// const add1 = (a,b) => a + b ;

// console.log(add1(3,5))

// console.log(average())

//coding challenge

//average of 3 scores
const calcAverage = (a, b, c) => a + b + c / 3;

console.log(calcAverage(3, 4, 5));

const dolphin_average = calcAverage(444, 23, 71);
const koalas_average = calcAverage(6593, 54, 49);

check_winner(dolphin_average, koalas_average);

function check_winner(avgdolphin, avgkoalas) {
  if (avgdolphin >= 2 * avgkoalas) {
    console.log('Dolphin wins');
  } else if (avgkoalas >= 2 * avgdolphin) {
    console.log('Koalas wins');
  } else {
    console.log('Nobody wins');
  }
}
