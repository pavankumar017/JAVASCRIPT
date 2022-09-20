//Consrtuctor function
const Name = function (first_name, age) {
  console.log(this);
  //   //instance prperties
  this.first_name = first_name;
  this.age = age;
};

Name.prototype.calcage = function () {
  return 2022 - this.age;
};

//student class

const Student = function (first_name, age, course) {
  Name.call(this, first_name, age); // using call function to set this keyowrd
  this.course = course;
};

//linking prototypes
Student.prototype = Object.create(Name.prototype);

Student.prototype.intro = function () {
  console.log(`I am ${this.first_name} and I study ${this.course}`);
};

const jared = new Student('Jared', 24, 'CS');
jared.intro();
console.log(jared.calcage()); //this was possible coz we created link using object.create
