'use strict';

// //Consrtuctor function
// const Name = function (first_name, age) {
//   console.log(this);
//   //instance prperties
//   this.first_name = first_name;
//   this.age = age;
// };

// //pav and jon are instances cretaed
// const Pav = new Name('Pavan', 26);
// console.log(Pav);

// //whats use of New
// //1. New empty object cretaed.
// //2.this keyword proints to that opbject
// //.object is linked to prototype so that we create multiple.
// //4. Function auto returns the create object at the end

// const jon = new Name('Jonas', 47);

// console.log(jon);

// //prototypes

// console.log(Name.prototype);

// Name.prototype.calcage = function () {
//   return 2022 - this.age;
// };

// console.log(Pav.calcage()); // now the constructor created has access to the methods coz of prototypal inheritance
// // this type of adding metod in prototype solves creation or calling of methods multiple times in the instances pav, jom

// //ES6 Classes
// class NAME {
//   constructor(name1, job) {
//     this.job = job;
//     this.name1 = name1;
//   }

//   //these are called instance method
//   //methods inside prototype
//   calcjob() {
//     console.log(this.job);
//   }

//   //These are called static method
//   static hey() {
//     console.log('Hey Static');
//   }
// }

// NAME.hey();
// //or can create a prototype method on old way also

// NAME.prototype.disNmae = function () {
//   console.log(this.name1);
// };

// const jad = new NAME('JADE', 'SDE');

// jad.calcjob();
// jad.disNmae();

//prototypal inheritance using objct.create bw two diff clasees

const per = {
  calage() {
    return 2022 - this.birthyear;
  },

  init(first_name, birthyear) {
    this.first_name = first_name;
    this.birthyear = birthyear;
  },
};

const jedar = Object.create(per);
console.log(jedar);

const jesica = Object.create(per);
console.log(jesica);
jesica.init('Jessica', 1996);
console.log(jesica.calage());

// //inheritance bw two classe

// class Person {
//   constructor(full_name, dob) {
//     this.full_name = full_name;
//     this.dob = dob;
//   }

//   calc_age() {
//     return 2037 - this.dob;
//   }
// }

// class Student extends Person {
//   //this extends keywords is that creates a link
//   constructor(full_name, dob, course) {
//     // constrtor function is what as args passed
//     super(full_name, dob);
//     this.course = course;
//   }
// }

// const martha = new Student('Martha james', 2012, 'CS');
// console.log(martha);
// console.log(martha.calc_age());
//
