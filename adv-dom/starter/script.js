'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btn_learn_more = document.querySelector('.btn--scroll-to');
const scroll_to = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btopen => btopen.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//scroll on clicking learn more

btn_learn_more.addEventListener('click', function () {
  scroll_to.scrollIntoView({ behavior: 'smooth' });
});

//PAGE SCROLLING
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//tabbed component

const tabs = document.querySelectorAll('.operations__tab');
const container = document.querySelector('.operations__tab-container');
const tab_content = document.querySelectorAll('.operations__content');

//event listner when clicked on buttin

container.addEventListener('click', function (e) {
  const button_clicked = e.target.closest('.operations__tab');
  console.log(button_clicked);

  if (!button_clicked) return;
  //removing active to all tabs
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tab_content.forEach(cont =>
    cont.classList.remove('operations__content--active')
  );

  //add active for current clicked
  button_clicked.classList.add('operations__tab--active');

  //select and add active class list for container , selecting based on tab clicked gets a data set value
  document
    .querySelector(`.operations__content--${button_clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//fade movemnets in tops

//hover handler function
const handleHover = function (opacity) {
  // console.log(this);
  //aplied closure concept
  return function (e) {
    if (e.target.classList.contains('nav__link')) {
      const hovered_link = e.target;
      // console.log(hovered_link);
      const not_hovered_links = hovered_link
        .closest('nav')
        .querySelectorAll('.nav__link');

      const logo = hovered_link.closest('nav').querySelector('img');

      //condn to check and opacity of non hovered elements
      not_hovered_links.forEach(el => {
        if (el !== hovered_link) el.style.opacity = opacity;
      });
      logo.style.opacity = opacity;
    }
  };
};

const top_nav = document.querySelector('.nav');

//passing argument into event handler
top_nav.addEventListener('mouseover', handleHover(0.5));

//to remove opacity
top_nav.addEventListener('mouseout', handleHover(1));

//sticky navigation
const obscalkback = function (entry) {
  entry.forEach(ent => {
    if (!ent.isIntersecting) {
      top_nav.classList.add('sticky');
    } else top_nav.classList.remove('sticky');
  });
};

const obsoptions = {
  root: null,
  threshold: 0,
};

const observer_api = new IntersectionObserver(obscalkback, obsoptions);
observer_api.observe(document.querySelector('.header'));
