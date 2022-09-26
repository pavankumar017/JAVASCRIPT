'use strict';

class account {
  //public fields
  lang = navigator.language;

  //private fields
  #movements = [];

  constructor(name, pin) {
    this.name = name;
    this.pin = pin;
    // this.#movements = [];
    // this.lang = navigator.language;
  }

  //oublic interface - these are the methods or vars which can be accessed outside the class
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  approveloan() {
    return true;
  }

  requestloan(val) {
    if (this.approveloan) {
      this.deposit(val);
      console.log('loan approved');
      return this;
    }
  }
}

const acc1 = new account('Jonas', 1111);
console.log(acc1);
acc1.deposit(120);
acc1.withdraw(100);
acc1.requestloan(200);

// thise gives error its a private fields  console.log(acc1.#movemnts);

//chaining
acc1.deposit(100).withdraw(100).requestloan(100);
