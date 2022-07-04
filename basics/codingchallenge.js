'use srtict';

const arr1 = [12, 4,2,34,23,23,21,123]


const calc_avg = function (arr) {
    let sum = 0
    console.log("arr" + arr)
    for (let i =0 ;i < arr.length ; i ++){
        sum = sum + arr[i];
        console.log("sum " + sum)
    }
    return sum / arr.length ;
}

console.log(calc_avg([2,4,5,6]));