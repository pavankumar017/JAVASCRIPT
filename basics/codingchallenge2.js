// first - take array as input to function
//create a template literal

function print_forecast(arry) {
  str = '';
  for (let i = 0; i < arry.length; i++) {
    str = str + `${arry[i]} C in ${i + 1}days ....`;
  }

  console.log(str);
}

const data = [1, 20, 9];

print_forecast(data);
