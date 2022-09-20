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

console.log('in login page');

const display_movements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const move_check = sort ? movements.slice().sort((a, b) => a - b) : movements; //slice is used to create a copy of movements and this line is for sorting ascending order and display

  console.log(movements);
  console.log(move_check);

  move_check.forEach(function (mov, i) {
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
const calc_balance_print = function (full_acc) {
  const bal = full_acc.movements.reduce((acc, val) => acc + val, 0);
  full_acc.balance = bal;
  labelBalance.textContent = `${bal} €`;
}; //initiator value of acc}

//update UI based on movements
const update_ui = function (acc) {
  //movments
  display_movements(acc.movements);
  //display balance

  calc_balance_print(acc);

  //display summary

  calc_display_summary(acc);
};
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
  console.log('curre_acc ', current_account);
  if (current_account?.pin === Number(inputLoginPin.value)) {
    //display ui and message
    labelWelcome.textContent = `Welcome ${current_account.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    update_ui(current_account);
  }
});

//TransfbtnTransferers.
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transfer_amount = Number(inputTransferAmount.value);
  const trasfer_account = accounts.find(
    acc => acc.user_name === inputTransferTo.value
  );
  console.log(transfer_amount, trasfer_account);

  if (
    transfer_amount > 0 &&
    trasfer_account &&
    current_account.balance >= transfer_amount &&
    trasfer_account.user_name !== current_account.user_name
  ) {
    //add movements
    current_account.movements.push(-transfer_amount);
    trasfer_account.movements.push(transfer_amount);
    update_ui(current_account);
  }
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
});

//request loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loan_requested = Number(inputLoanAmount.value);

  if (
    loan_requested > 0 &&
    current_account.movements.some(mov => mov > loan_requested * 0.1)
  ) {
    current_account.movements.push(loan_requested);
  }
  update_ui(current_account);
  inputLoanAmount.value = '';
});

//closure of account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    current_account.user_name === inputCloseUsername.value &&
    current_account?.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.user_name === current_account.user_name
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
});

let sort_state = false;
//handling sort
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  display_movements(current_account.movements, !sort_state);
  sort_state = !sort_state; //coz this state will be used to check in display movements method
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

//More array Practice
//1. TO sum all movements
const Sum_of_all_depos = accounts
  .flatMap(val => val.movements)
  .filter(val => val > 0)
  .reduce((val, curr) => val + curr);

console.log(Sum_of_all_depos);

//2. NUM of depos > 1000.
const num_of_depos_grt1000 = accounts
  .flatMap(val => val.movements)
  .filter(val => val > 1000).length;

console.log(num_of_depos_grt1000);

//3. Calculate depo and withdrawal and create aobject and put in it
const sums = accounts
  .flatMap(val => val.movements)
  .reduce(
    (sum, curr) => {
      // curr > 0
      //   ? (sum.deposits = sum.deposits + curr)
      //   : (sum.withdrawals = sum.withdrawals + curr);

      sum[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

//4, Conv with excptions---Ex : this is a heading  -- This is a Heading .

const convert_title_case = function (title) {
  const ecxeption = ['', 'an', 'is', 'the'];
  const title_lower_split = title
    .toLowerCase()
    .split(' ')
    .map(str =>
      ecxeption.includes(str) ? str : str[0].toUpperCase() + str.slice(1)
    )
    .join(' ');
  console.log(title_lower_split);
};

convert_title_case('this is a heading');
//console.log(convert_title_case('this is a heading'));
