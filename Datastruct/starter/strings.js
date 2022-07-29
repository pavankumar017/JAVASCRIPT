'use strict';

const airline = 'Air India';
const plane_no = 'A1727';

console.log(airline.slice(4, 8));

console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(-4));

//b and E are middle seats then say its a middle seats

const seat_no = function (seatno) {
  const letter = seatno.slice(-1);
  const msg =
    letter == 'B' || letter == 'E'
      ? 'you are in middle seat'
      : ' you are in Edge seat';
  console.log(msg);
};

seat_no('11B');
seat_no('11D');

let pass_name = 'JasdaS';
pass_name = pass_name.toLowerCase();
console.log(pass_name);

//replace parts of strings
const priceGB = ' 232,123#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

//trim
console.log(priceGB.trim(',')); //op  : '232,123#';

//Split
const str = 'A+very+nice+string';
const split_str = str.split('+'); //op :4) ['A', 'very', 'nice', 'string']
console.log(split_str);
//join
const join_str = split_str.join(' ');
console.log(join_str);

//pading
console.log(join_str.padStart(25, '+')); //OP :+++++++A very nice string
