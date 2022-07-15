'use strict';

const score0 = document.getElementById('score--0');
//select element using element
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
let active_player = 0;
let current_score = 0;
let playing = true;
let total_main_score = [0, 0];
let current_score_element1 = document.getElementById('current--0');
let current_score_element2 = document.getElementById('current--1');
let player_main_score_1 = document.getElementById('score--0');
let player_main_score_2 = document.getElementById('score--1');
const player01 = document.querySelector('.player--0');
const player02 = document.querySelector('.player--1');
reset_default();

// click on roll the dice
const roll_dice = document.querySelector('.btn--roll');
roll_dice.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random number
    let secret_number = Math.trunc(Math.random() * 6) + 1;
    console.log(secret_number);
    //add a dice to it
    dice.classList.remove('hidden');
    dice.src = `dice-${secret_number}.png`;

    //check if it is one
    if (secret_number !== 1) {
      //add dice value to cureent values
      current_score = current_score + secret_number;
      document.getElementById(`current--${active_player}`).textContent =
        current_score;
    } else {
      //switch player
      current_score = 0;
      document.getElementById(`current--${active_player}`).textContent =
        current_score;
      active_player = active_player === 0 ? 1 : 0;
      switch_background();
    }
  }
});

//click on new game
const new_game = document.querySelector('.btn--new');
new_game.addEventListener('click', reset_default);

//click on hold
const hold = document.querySelector('.btn--hold');
hold.addEventListener('click', function () {
  if (playing) {
    //1.add current score to total score of active player
    total_main_score[active_player] =
      total_main_score[active_player] + current_score;
    document.getElementById(`score--${active_player}`).textContent =
      total_main_score[active_player];

    //3. if Total score is 100 or more win player
    if (total_main_score[active_player] >= 20) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${active_player}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active_player}`)
        .classList.remove('player--active');
    }
    //2 .switch players
    else {
      active_player = active_player === 0 ? 1 : 0;
      switch_background();
      current_score = 0;
    }
  }
});

//resets all the major values to default
function reset_default() {
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden'); //hide the dice
  current_score_element1.textContent = 0;
  current_score_element2.textContent = 0;
  current_score = 0;
  total_main_score = [0, 0];
  player01.classList.add('player--active');
  player02.classList.remove('player--active');
  playing = true;
  document
    .querySelector(`.player--${active_player}`)
    .classList.remove('player--winner');
  document;
  active_player = 0;
}
function switch_background() {
  player01.classList.toggle('player--active'); //if class is present it will remove , if not it will add
  player02.classList.toggle('player--active');
}
