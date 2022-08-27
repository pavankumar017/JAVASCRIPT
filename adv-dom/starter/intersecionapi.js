'use srict';

const obscalkback = function (entry, observer) {
  entry.forEach(ent => {
    console.log(ent);
  });
};

const obsoptions = {
  root: null,
  threshold: 0.5,
};

const observer_api = new IntersectionObserver(obscalkback, obsoptions);
observer_api.observe(document.querySelector('#section--1'));
