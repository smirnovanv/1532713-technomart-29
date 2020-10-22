/* Слайдер номер 1 */
let secondslideDot = document.querySelector('.slide2-dot');
let firstslideDot = document.querySelector('.slide1-dot');

let firstSlide = document.querySelector('.slide-1');
let secondSlide = document.querySelector('.slide-2');


firstslideDot.onclick = function () {
firstslideDot.classList.add('current');
secondslideDot.classList.remove('current');
firstSlide.classList.add('slide-current');
secondSlide.classList.remove('slide-current')}

secondslideDot.onclick = function () {
secondslideDot.classList.add('current');
firstslideDot.classList.remove('current');
secondSlide.classList.add('slide-current');
firstSlide.classList.remove('slide-current')}


let forward = document.querySelector('.forward');
let back = document.querySelector('.back');

forward.onclick = function () {
  if (firstSlide.classList.contains('slide-current')) {
    secondSlide.classList.add('slide-current');
    firstSlide.classList.remove('slide-current');
    secondslideDot.classList.add('current');
    firstslideDot.classList.remove('current')
  }
}

back.onclick = function () {
  if (secondSlide.classList.contains('slide-current')) {
    firstSlide.classList.add('slide-current');
    secondSlide.classList.remove('slide-current');
    firstslideDot.classList.add('current');
    secondslideDot.classList.remove('current')
  }
}

/* Слайдер Сервисы */

let deliveryButton = document.querySelector('.delivery-button');
let guaranteeButton = document.querySelector('.guarantee-button');
let creditButton = document.querySelector('.credit-button');

let deliverySubsection = document.querySelector('.delivery-subsection');
let guaranteeSubsection = document.querySelector('.guarantee-subsection');
let creditSubsection = document.querySelector('.credit-subsection');

deliveryButton.onclick = function () {
  deliveryButton.classList.add('current');
  guaranteeButton.classList.remove('current');
  creditButton.classList.remove('current');

  deliverySubsection.classList.add('service-subsection-current');
  guaranteeSubsection.classList.remove('service-subsection-current');
  creditSubsection.classList.remove('service-subsection-current');
}

guaranteeButton.onclick = function () {
  guaranteeButton.classList.add('current');
  creditButton.classList.remove('current');
  deliveryButton.classList.remove('current');

  guaranteeSubsection.classList.add('service-subsection-current');
  creditSubsection.classList.remove('service-subsection-current');
  deliverySubsection.classList.remove('service-subsection-current');
}

creditButton.onclick = function () {
  creditButton.classList.add('current');
  deliveryButton.classList.remove('current');
  guaranteeButton.classList.remove('current');

  creditSubsection.classList.add('service-subsection-current');
  guaranteeSubsection.classList.remove('service-subsection-current');
  deliverySubsection.classList.remove('service-subsection-current');
}

/* Модальное окно Напишите нам */

const contactButton = document.querySelector('.contact-us-button');
const contactPopup = document.querySelector('.modal-write-us');
const contactClose = contactPopup.querySelector('.modal-close');
const usernameField = contactPopup.querySelector('.username');
const contactForm = contactPopup.querySelector('.contact-form');
const emailField = contactPopup.querySelector('.email');
const textField = contactPopup.querySelector('.text-field')

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}


contactButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  contactPopup.classList.add('modal-show');

  if (storage) {
    usernameField.value = storage;
    emailField.focus();
  } else {
  usernameField.focus();
  }
});

contactClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove('modal-show');
  contactPopup.classList.remove("modal-error");
});

contactForm.addEventListener('submit', function (evt) {
  if (!usernameField.value || !emailField.value || !textField.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add('modal-error');

  } else {
    if (isStorageSupport) {
    localStorage.setItem('login', usernameField.value);
   }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      contactPopup.classList.remove('modal-show');
      contactPopup.classList.remove('modal-error');
    }
  }
});

/* Модальное окно Карта */

const mapLink = document.querySelector('.show-map-link');
const mapPopup = document.querySelector('.modal-map');
const mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('modal-show');
    }
  }
});


