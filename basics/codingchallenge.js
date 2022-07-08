'use srtict';

//to calc avrage of the array
// const arr1 = [12, 4,2,34,23,23,21,123]

// const calc_avg = function (arr) {
//     let sum = 0
//     console.log("arr" + arr)
//     for (let i =0 ;i < arr.length ; i ++){
//         sum = sum + arr[i];
//         console.log("sum " + sum)
//     }
//     return sum / arr.length ;
// }

// console.log(calc_avg([2,4,5,6]));

//to find the amplitude of the temp = amp = max -min

const temp = [12, -3, 'error', -8, 23, 0];

const cal_amplitude = function (temps) {
  let temp_max = temps[0];
  let temp_min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    let current_temp = temp[i];

    if (typeof current_temp !== 'number') continue;
    if (current_temp > temp_max) temp_max = current_temp;
    if (current_temp < temp_min) temp_min = current_temp;
  }
  console.log(temp_max);
  return temp_max - temp_min;
};

console.log(cal_amplitude(temp));
