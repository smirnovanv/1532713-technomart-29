/* Модальное окно Уведомление о добавлении в корзину */

const purchaseButtons = document.querySelectorAll('.purchase-button');
const cartPopup = document.querySelector('.modal-cart-notification');
const cartClose = cartPopup.querySelector('.modal-close');
const continueShopping = cartPopup.querySelector('.continue-shopping-button');

for (let purchaseButton of purchaseButtons) {
  purchaseButton.onclick = function (evt) {
    evt.preventDefault();
    cartPopup.classList.add('modal-show');
  }
}

cartClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove('modal-show');
});

continueShopping.addEventListener('click', function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      cartPopup.classList.remove('modal-show');
    }
  }
});
