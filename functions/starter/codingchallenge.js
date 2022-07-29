'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

console.log(poll.answers[0]);
//1 .
poll.register_answer = function () {
  //1.1
  const a = prompt(`${poll.question} \n ${poll.options.join('\n')}
  (Write option number)
  `);
  //1.2
  poll.answers[a] = poll.answers[a] + 1;
  console.log(poll);

  display_results(poll.answers);
  display_results();
};

//2
document
  .querySelector('.poll')
  .addEventListener('click', poll.register_answer.bind(poll));

//3.
const display_results = function (type) {
  typeof type === 'string'
    ? console.log(`POLL results are ${type}`)
    : console.log(type);
};
