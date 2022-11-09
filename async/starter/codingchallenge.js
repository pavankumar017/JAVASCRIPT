'use strict';

// const whereami = function (long, lat) {
//   return fetch(
//     `https://geocode.xyz/${long},${lat}?geoit=json&auth=89874837774679105618x33145 )`
//   )
//     .then(country => {
//       if (!country.ok) {
//         throw new Error('Problem with geocoding');
//       }
//       return country.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.country}`);

//       return data;
//     })
//     .catch(err => {
//       console.log(`${err.message}`);
//     });
// };
// whereami(52.508, 13.381);
// whereami(19.037, 72.873);
// whereami(-33.933, 18.474);

// //creating our own promise

// const lotterypromise = new Promise(function (resolve, reject) {
//   if (Math.random() > 0.5) {
//     resolve('You win');
//   } else {
//     reject('you lose');
//   }
// });

// lotterypromise.then(resp => console.log(resp)).catch(err => console.error(err));
