var feedback = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-popup");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".modal-popup-close");
var closeonoverlay = document.querySelector(".overlay");
var modalform = popup.querySelector("form");
var feedbackname = popup.querySelector("[name=username]");
var feedbackemail = popup.querySelector("[name=email]");
var feedbackreview = popup.querySelector("[name=review]");
var storage = localStorage.getItem("feedbackname");

feedback.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-popup-show");
  overlay.classList.add("overlay-show");
  if (storage) {
    feedbackname.value = storage;
    feedbackemail.focus();
    } else {
        feedbackname.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-popup-show");
  overlay.classList.remove("overlay-show");
  popup.classList.remove("modal-popup-error");
});

closeonoverlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-popup-show");
  overlay.classList.remove("overlay-show");
  popup.classList.remove("modal-popup-error");
});

modalform.addEventListener("submit", function(event) {
  if (!feedbackname.value || !feedbackemail.value || !feedbackreview.value) {
    event.preventDefault();
    popup.classList.remove("modal-popup-error");
    popup.classList.add("modal-popup-error");
  } else {
    localStorage.setItem("feedbackname", feedbackname.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-popup-show") && overlay.classList.contains("overlay-show")) {
      popup.classList.remove("modal-popup-show");
      overlay.classList.remove("overlay-show");
      popup.classList.remove("modal-popup-error");
    }
  }
});
