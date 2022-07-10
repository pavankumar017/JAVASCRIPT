'use strict';

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high_score = 0;
console.log(secret_number);
//document.querySelector('.number').textContent = secret_number;

//evenhandler when clicked on again

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  secret_number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
  } //when player wins
  else if (secret_number === guess) {
    document.querySelector('.message').textContent = 'Correct Number !';
    //manipulating CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret_number;

    //TO IMPLEMENT HIGH SCORE LOGIC
    if (score > high_score) {
      high_score = score;
      document.querySelector('.highscore').textContent = high_score;
    }
  } //when to high
  else if (guess > secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too high !';
      score = score - 1;
      document.querySelector('.score').textContent = score;
      console.log('sCORE' + score);
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  } //when too low
  else if (guess < secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
  console.log('High Score = ' + high_score);
});
