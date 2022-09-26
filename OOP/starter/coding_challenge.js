'use strict';

// const Car = function (make, speed) {
//   console.log(this);
//   this.make = make;
//   this.speed = speed;
// };

// //acceleraion fucn

// Car.prototype.acceleration = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} is running at ${this.speed}`);
// };

// //brake func

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} is running at ${this.speed}`);
// };

// //creation of car objects

// const BMW = new Car('BMW', 100);
// BMW.acceleration();
// BMW.brake();

// const Audi = new Car('Audi', 100);
// Audi.brake();
// Audi.acceleration();

// //challenge 2 using ES6 CLASSES
// class carCL {
//   constructor(car_name, speed) {
//     this.car_name = car_name;
//     this.speed = speed;
//     console.log(this);
//   }
//   brake = function () {
//     this.speed = this.speed - 5;
//     console.log(`${this.car_name} is running at ${this.speed}`);
//   };

//   acceleration = function () {
//     this.speed = this.speed + 10;
//     console.log(`${this.car_name} is running at ${this.speed}`);
//   };
// }

// //don worry about the names of vars

// const toy = new carCL('toyata', 115);
// console.log(toy);
// toy.brake();
// toy.acceleration();

//coDING challenge 3

const Car1 = function (make, current_speed) {
  this.make = make;
  this.current_speed = current_speed;
};
Car1.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.car_name} is running at ${this.speed}`);
};

Car1.prototype.acceleration = function () {
  this.speed = this.speed + 10;
  console.log(`${this.car_name} is running at ${this.speed}`);
};

const EVCAR = function (make, current_speed, battery) {
  Car1.call(this, make, current_speed);
  this.battery = battery;
};

//LINK THE PROTOTYPES

EVCAR.prototype = Object.create(Car1.prototype);

EVCAR.prototype.charegto = function (chargeto) {
  this.battery = chargeto;
};

console.dir(EVCAR);
const Tesla = new EVCAR('tesla', 100, 25);
console.log(Tesla);
Tesla.charegto(50);
console.log(Tesla);


