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
  //e is an event
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

//reveal section
const all_section = document.querySelectorAll('.section');

const reveal_section = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const section_observer = new IntersectionObserver(reveal_section, {
  root: null,
  threshold: 0.15,
});

all_section.forEach(function (section) {
  // section.classList.add('section--hidden');
  section_observer.observe(section);
});

//lazy loading
const target_image = document.querySelectorAll('img[data-src]');

const loadimg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //replace src with data set src
  entry.target.src = entry.target.dataset.src;

  //we want to have image after load
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const observe_img = new IntersectionObserver(loadimg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
console.log(observe_img);

target_image.forEach(img => {
  observe_img.observe(img);
});

//slider component

const slides = document.querySelectorAll('.slide');
const btn_right = document.querySelector('.slider__btn--right');
const btn_left = document.querySelector('.slider__btn--left');

const slider = document.querySelector('.slider');

const dotcontainer = document.querySelector('.dots');

// slider.style.transform = 'scale(0.3)'; this is just to reduce its size
// slider.style.overflow = 'visible';

let current_slide = 0;
const max_slides = slides.length;

const gotoslide = function (slidesin) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slidesin)}%)`;
    //-100%, 0% ,100%
  });
};

//dot creation function

const create_dots = function () {
  slides.forEach(function (_, i) {
    dotcontainer.insertAdjacentHTML(
      'beforeend',
      `<button class = "dots__dot" data-slide = "${i}"></button>`
    );
  });
};

const activateDot = function (dot) {
  const dots = document.querySelectorAll('.dots__dot');
  dots.forEach(d => d.classList.remove('dots__dot--active'));
  console.log('dot', dot);
  document
    .querySelector(`.dots__dot[data-slide="${dot}"]`)
    .classList.add('dots__dot--active');
};

create_dots();
gotoslide(0); //this is for first default positions  //0%, 100% ,200%
activateDot(0);

const nextslide = function () {
  //to have a condn when we click on last slides it should come back
  if (current_slide === max_slides - 1) {
    current_slide = 0; // when clicked on last slide right buttonit resets to 0 and comes to first slide
  } else {
    current_slide++;
  }
  gotoslide(current_slide);
  activateDot(current_slide);
};

const prevslide = function () {
  //here its oppsite to nextslide we have to decrease curret slide value and when its 0 set to max(3rd slide)
  if (current_slide === 0) {
    current_slide = max_slides - 1;
  } else {
    current_slide--;
  }
  gotoslide(current_slide);
  activateDot(current_slide);
};

btn_right.addEventListener('click', nextslide);
btn_left.addEventListener('click', prevslide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    nextslide();
  } else if (e.key === 'ArrowLeft') {
    prevslide();
  }
});

//adding evernt listners for dots - we used event propogation
dotcontainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide; // slide is the dataset name we have set
    console.log(slide);
    gotoslide(slide);
    activateDot(slide);
  }
});
