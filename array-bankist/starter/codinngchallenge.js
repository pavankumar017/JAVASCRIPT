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

// const calc_av_human_age = dog_age =>
//   dog_age
//     .map(val => (val = val <= 2 ? 2 * val : 16 + 4 * val))
//     .filter(val => val >= 18)
//     .reduce((acc, val, i, arr) => acc + val / arr.length, 0);

// console.log(calc_av_human_age([[1, 2, 3, 34, 3]]));

// console.log('hi');

//Final coding challenge.

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
];

//1.
const calc_reccomended_food = dogs => {
  dogs.forEach(dog => {
    dog.recc_food = Math.trunc(dog.weight ** 0.75 * 28);
  });
};

calc_reccomended_food(dogs);
console.log(dogs);

//2.

const find_sarah_dog = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(find_sarah_dog);
console.log(
  `Sarah dog is eating ${
    find_sarah_dog.curFood > find_sarah_dog.recc_food ? 'TooMuch' : 'Less'
  }`
);

//3.
const owners_to_much = dogs
  .filter(dogs => dogs.curFood > dogs.recc_food)
  .flatMap(own => own.owners);
console.log(owners_to_much);

const owners_to_less = dogs
  .filter(dogs => dogs.curFood < dogs.recc_food)
  .flatMap(own => own.owners);
console.log(owners_to_less);

//4.
console.log(`${owners_to_much.join(' and ')} dogs are eating too musc`);

//5.
console.log(dogs.every(dogs => dogs.recc_food === dogs.curFood));

//6.
let dogs_copy = dogs.slice();
console.log(dogs_copy);

dogs_copy.sort((a, b) => a.recc_food - b.recc_food);
// console.log(dogs_copy);
