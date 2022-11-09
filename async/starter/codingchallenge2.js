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

let imga;
createImage('img/img-1.jpg')
  .then(function (img) {
    console.log('Image loaded ');
    imga = img;
    console.log(imga);
    return wait(2);
  })
  .then(() => {
    imga.style.display = 'none';
    createImage('img/img-2.jpg');
  })
  .then(function (img) {
    console.log('Image2 loaded ');
    imga = img;
    console.log(imga);
    return wait(2);
  })
  .then(() => {
    imga.style.display = 'none';
    createImage('img/img-3.jpg');
  });
