'use strict';

// const check_dogs = function (julia_dog, kate_dog) {
//   const julia_corrected = [...julia_dog];

//   julia_corrected.splice(0, 1);
//   julia_corrected.splice(-2);
//   console.log(julia_corrected);
//   console.log(julia_dog);
//   const alldogs = julia_corrected.concat(kate_dog);

//   alldogs.forEach((dog, i) => {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is a an adult age ${dog}`);
//     } else {
//       console.log(`Dog number ${i + 1} is a an puppy age ${dog}`);
//     }
//   });
// };

//check_dogs([12, 2, 3, 4, 1], [2, 4, 3, 1, 4]);

///COdnng challenge 2
// const calc_average_human_age = function (dog_age) {
//   //1.
//   const cal_humanage = dog_age.map(
//     val => (val = val <= 2 ? 2 * val : 16 + 4 * val)
//   );
//   console.log(cal_humanage);
//   //2.
//   const filtered = cal_humanage.filter(fil_val => fil_val > 18);
//   console.log(filtered);

//   //3.
//   const avg = filtered.reduce((sum, val, i, arr) => sum + val / arr.length);
//   console.log(avg);
// };

//calc_average_human_age([1, 2, 3, 34, 3]);

//coding challenge 3.with chaining methods

const calc_av_human_age = dog_age =>
  dog_age
    .map(val => (val = val <= 2 ? 2 * val : 16 + 4 * val))
    .filter(val => val >= 18)
    .reduce((acc, val, i, arr) => acc + val / arr.length, 0);

console.log(calc_av_human_age([[1, 2, 3, 34, 3]]));
