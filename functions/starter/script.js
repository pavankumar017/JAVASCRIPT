'use strict';

//to set default values to function arguments
const bookings = [];
const create_book = function (
  flight_no = 0,
  no_of_passenger = 0,
  price = 99 * no_of_passenger
) {
  const flight = {
    flight_no,
    no_of_passenger,
    price,
  };
  console.log(flight);
  bookings.push(flight);
  console.log(bookings);
};

create_book('123');

//higer order function

const add = function (a, b) {
  // thse are callbackfunction
  return a + b;
};

const mul = function (a, b) {
  return a * b;
};

//this is the higher order function that is used
const mul_add = function (a, b, fn) {
  console.log(fn(a, b));
};

mul_add(1, 2, mul);

//function returning a string
const greet = function (greet) {
  return function (name) {
    console.log(`${greet} ${name}`);
  };
};

const greet_hey = greet('hey');
greet_hey('pavan');

//using arrow
const greet1 = greet => name => console.log(`${greet} ${name}`);

const greet_hey1 = greet1('hey');
greet_hey('pavan');

//Call and apply methods.
const lufthansa = {
  airline: 'Lufthansa',
  iatcode: 'LH',
  bookings: [],
  book(flight_num, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight no ${flight_num}`
    );
    this.bookings.push({ flight: `${flight_num}`, name });
  }, //enhanced oject literal to write a func in objeects
};

lufthansa.book(1213, 'Pavan ');
console.log(lufthansa);

const booker = lufthansa.book;

const emirated = {
  airline: 'Emirates',
  iatcode: 'EM',
  bookings: [],
};
//setting this keyword explicitly
booker.call(lufthansa, 345, 'jonsas');

booker.call(emirated, 45654, 'Nani');

//bind method

const bind_book = booker.bind(emirated);
bind_book(4545, 'Mahesh');

//also bind can be used to preset a parameter
const bind_par = booker.bind(lufthansa, 97987);
bind_par('Martha');
bind_par('Julie');

//with event listners

lufthansa.planes = 300;

lufthansa.buy_plane = function () {
  this.planes++;
  console.log(lufthansa.planes);
};

console.log(lufthansa);
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buy_plane.bind(lufthansa));

//partial application

const addtax = (rate, value) => value + value * rate;
console.log(addtax(0.2, 100));

const addVtaxs = addtax.bind(null, 0.23);
console.log(addVtaxs(100));

//IMMEDIATELY INVOKED FUNCTION

(function () {
  console.log('Immediately invoked function ');
})();

//Closures

// const secure_book = function () {
//   let passeng_count = 0;

//   return function () {
//     passeng_count++;
//     console.log(passeng_count);
//   };
// };

// const booker = secure_book(); //this connection where it allows to access function is called closure
// booker(); //booker has access to variable
// booker();
// booker();
