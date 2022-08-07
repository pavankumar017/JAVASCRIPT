'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const display_movements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--deposit">${
            i + 1
          } ${type}</div>
          <div class="movements__value">${mov}€ </div>
        </div>`;

    // adding a HTML block
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//to display summary of deposits and withdrawals

const calc_display_summary = function (full_acc) {
  const incomes = full_acc.movements
    .filter(val => val > 0)
    .reduce((acc, val) => acc + val);
  labelSumIn.textContent = `${incomes} €`;

  const outcomes = full_acc.movements
    .filter(val => val < 0)
    .reduce((acc, val) => acc + val);
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  const intrest = full_acc.movements
    .filter(val => val > 0)
    .map(int => (int * full_acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${intrest}€`;
};

//to display the balance
const calc_balance_print = function (movements) {
  const bal = movements.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = `${bal} €`;
}; //initiator value of acc}

//compute user names:

const user_name = function (full_name_arr) {
  full_name_arr.forEach(function (acc) {
    acc.user_name = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

user_name(accounts);
console.log(accounts);

//Event handler for login
let current_account;

btnLogin.addEventListener('click', function (e) {
  //prevents from auto reload when clicked on button
  e.preventDefault();
  current_account = accounts.find(
    current_account => current_account.user_name === inputLoginUsername.value
  );
  console.log(current_account);
  if (current_account?.pin === Number(inputLoginPin.value)) {
    //display ui and message
    labelWelcome.textContent = `Welcome ${current_account.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    //movments
    display_movements(current_account.movements);
    //display balance

    calc_balance_print(current_account.movements);

    //display summary

    calc_display_summary(current_account);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
