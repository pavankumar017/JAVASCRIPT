"use strict";

//select the elements and store in a variable

const modal = document.querySelectorAll(".show-modal"); //THIS IS A LIST
const hidden_modal = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const close_btn = document.querySelector(".close-modal");

for (let i = 0; i < modal.length; i++) {
  modal[i].addEventListener("click", open_modal);
}

//functionality on close click
close_btn.addEventListener("click", close_modal);
overlay.addEventListener("click", close_modal);

//handling keypress event
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !hidden_modal.classList.contains("hidden")) {
    close_modal();
  } //checks if modal is also diplayed
});

function open_modal() {
  hidden_modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function close_modal() {
  hidden_modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
