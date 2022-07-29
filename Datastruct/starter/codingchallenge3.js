'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const split_str = text.split('\n');
  console.log(split_str);

  for (let i of split_str) {
    console.log(x);
    [x, y] = i.toLowerCase().trim().split('_');
    console.log(x);
    // const [y, z] = [x];
    // console.log(`${y}${z(1).toUpperCase()}`);
  }
});
