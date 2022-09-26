'use strict';

class carcl {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

class EVcl extends carcl {
  #charge;
  constructor(name, speed, charge) {
    super(name, speed);
    this.#charge = charge;
  }

  charge_battery() {
    console.log('Battury charged to ', charge);
  }
}

const Tesla = new EVcl('Tesla', 100, 60);
console.log(Tesla);
