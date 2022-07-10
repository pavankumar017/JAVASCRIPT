'use strict';

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high_score = 0;
console.log(secret_number);
//document.querySelector('.number').textContent = secret_number;

function display_message(message) {
  document.querySelector('.message').textContent = message; //function to set message class
}

//evenhandler when clicked on again

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  secret_number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  display_message('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    display_message('No Number !');
  } //when player wins
  else if (secret_number === guess) {
    display_message('Correct Number !');
    //manipulating CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret_number;

    //TO IMPLEMENT HIGH SCORE LOGIC
    if (score > high_score) {
      high_score = score;
      document.querySelector('.highscore').textContent = high_score;
    }
  } else if (guess !== secret_number) {
    if (score > 1) {
      guess > secret_number
        ? display_message('Too High ')
        : dispatchEvent('Too Low'); //using ternary operator
      score = score - 1;
      document.querySelector('.score').textContent = score;
      console.log('sCORE' + score);
    } else {
      display_message('You lost the game!');
    }
  }
  console.log('High Score = ' + high_score);
});
