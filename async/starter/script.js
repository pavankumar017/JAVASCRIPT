'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//first ajax call

// const getcountrydata = function (country) {
//   const req = new XMLHttpRequest();
//   req.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   req.send();

//   req.addEventListener('load', function () {
//     const [data] = JSON.parse(req.responseText);
//     console.log(data);

//     const img = data.flags;
//     const name = data.name;
//     const lang = data.languages;

//     const curr = data.currencies;
//     const curr2 = Object.values(curr)[0];

//     const html = `
//   <article class="country">
//   <img class="country__img" src="${Object.values(img)[0]}" />
//   <div class="country__data">
//     <h3 class="country__name">${Object.values(name)[0]}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${data.population}</p>
//     <p class="country__row"><span>🗣️</span>${Object.values(lang)[0]}</p>
//     <p class="country__row"><span>💰</span>${curr2.name}</p>
//   </div>
// </article>`;

//     countriesContainer.insertAdjacentHTML('afterbegin', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

const rendercountryblock = function (data) {
  const img = data.flags;
  const name = data.name;
  const lang = data.languages;

  const curr = data.currencies;
  console.log(curr);
  const curr2 = Object.values(curr)[0];
  const html = `
  <article class="country">
  <img class="country__img" src="${Object.values(img)[0]}" />
  <div class="country__data">
    <h3 class="country__name">${Object.values(name)[0]}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${data.population}</p>
    <p class="country__row"><span>🗣️</span>${Object.values(lang)[0]}</p>
    <p class="country__row"><span>💰</span>${curr2.name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getneighbourcountry = function (country) {
//   //first ajax call
//   const req = new XMLHttpRequest();
//   req.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   req.send();

//   req.addEventListener('load', function () {
//     const [data] = JSON.parse(req.responseText);
//     console.log(data);

//     //render 1st country bllock.
//     rendercountryblock(data);

//     //get border country.
//     const neighbour = data.borders?.[0];
//     console.log(neighbour);
//   });
// };

// getneighbourcountry('india');

const fetch_and_conv_to_json = function (url) {
  return fetch(url).then(function (country) {
    if (!country.ok) {
      throw new Error('Country not found');
      console.log(country);
    }
    return country.json(); //to read the data from feth response we need to call json methodt but this is also a async promise hence having one mre then on entire
  });
};

// //Creating using promises
// const getcountrydata = function (country) {
//   fetch_and_conv_to_json(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (data_country) {
//       console.log(data_country);
//       rendercountryblock(data_country[0]);

//       //get nneighbur

//       const neighbour = data_country[0].borders?.[0];
//       console.log(neighbour);

//       //fetch call with neighbour countrys
//       fetch_and_conv_to_json(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`
//       ).then(function (n_data_country) {
//         console.log(n_data_country);
//         rendercountryblock(n_data_country[0]);
//       });
//     })
//     .catch(err => console.log(err));
// };

// getcountrydata('indi ');

// //Promisifying geolocation api

// const getposition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(err)
//     );
//   });
// };

// getposition().then(pos => console.log(pos));

//async and await

const whereamiasy = async function (country) {
  try {
    const dta_ccountry = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    const conv_data = await dta_ccountry.json();
    rendercountryblock(conv_data[0]);
    return `Found country`;
  } catch (err) {
    {
      console.log('something went wrong');
      throw err;
    }
  }
};

whereamiasy('india');

//getting values from async func
// whereamiasy('portugal')
//   .then(city => console.log(city))
//   .catch(err => console.log(err));

//using iify

(async function () {
  await whereamiasy('portugalasdas  ');
})();
