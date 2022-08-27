'use strict';

const times = ['3AM', '4AM', '12AM'];
const timer = setTimeout(
  (time1, time2) => console.log(`Timer ${time1}, ${time2}`),
  3000,
  ...times
);

console.log('Async JS');

if (times.includes('12AM')) clearTimeout(timer);
