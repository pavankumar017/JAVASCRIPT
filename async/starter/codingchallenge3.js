'use strict';
const imagescls = document.querySelector('.images');
console.log(imagescls);

const createImage = function (imgpath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgpath;

    img.addEventListener('load', function () {
      imagescls.append(img);
      console.log('img inside', img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(console.error('Img not found'));
    });
  });
};

const wait = function (time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time * 1000);
  });
};

const loadall = async function (imgarr) {
  const imgs = await imgarr.map(async img => {
    console.log(img);
    await createImage(img);
    const imgasll = await Promise.all(imgs);
    console.log(imgasll, 'imgasll');
  });
  console.log('imgs', imgs);
};

loadall(['img/img-1.jpg', 'img/img-2.jpg']);
