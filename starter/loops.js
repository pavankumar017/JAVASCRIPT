'use strict';

// for (let i = 1;i <=10 ; i++) {
//     console.log(`The re no  is ${i}`)
// }

// const arrya1 = ["Pavan" , "SDE", 25, true]
// let array2 =[]
// for (let i = 0 ; i< arrya1.length;i++){
//     console.log(arrya1[i])
//     array2[i] = typeof arrya1[i]
// }

// console.log(array2)


//example of continure ad break


// const arrya3 = ["Pavan" , "SDE", 25, true]
// let array4 =[]
// for (let j = 0 ; j< arrya3.length;j++){
//     if (typeof arrya3[j] !== 'string') continue;
//     console.log(arrya3[j])
//     array4[j] = typeof arrya3[j]
// }

// console.log(array4)


//loops in loops
// for (let exc = 0 ;exc < 4 ; exc ++){
    
//     for (let rep =0 ;rep <6 ;rep ++ ){
//         console.log(`Excersice  no ${exc}, repetation ${rep}`)
//     }
// }



// for (let i = 1;i <=10 ; i++) {
//     console.log(`The re no  is ${i}`)
// }

// let n =0 
// while (n<=10)
// {
    
//     console.log(n )
// }



//coding challenge 4

const bills = [22,295,176,440,37,105,10,1100,86,52];
let tips = [];
let totals = [];
let tip = 0
let total =0

const calctip = (bill)=> bill >= 50 && bill <=300 ? tip = 15/100 * bill : tip = 0.2 * bill 

for (let i = 0 ; i< bills.length;i++){
    tip = calctip(bills[i]);
    tips.push(tip)
    total = tip + bills[i]
    totals.push(total)
    
}

console.log(tips)
console.log(totals)