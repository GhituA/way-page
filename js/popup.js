'use strict';

(function () {

  var popup = document.querySelector('.popup');
  var popupForm = document.querySelector('.popup__form');
  var offersBtn = document.querySelectorAll('.offers__btn');
  var cardsBtn = document.querySelector('.cards__btn');
  var popupEsc = document.querySelector('.popup__esc');
  var popupSubmit = document.querySelector('.popup__submit');

  var popupPhone = document.querySelector('[id=popup-phone]');
  var popupEmail = document.querySelector('[id=popup-email]');
  var storagePhone = localStorage.getItem('popupPhone');
  var storageEmail = localStorage.getItem('popupEmail');
  var isStorageSupport = true;

  try {
    storagePhone = localStorage.getItem('popupPhone');
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storageEmail = localStorage.getItem('popupEmail');
  } catch (err) {
    isStorageSupport = false;
  }

  var onPopupOpen = function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--hidden');

    if (storagePhone) {
      popupPhone.value = storagePhone;
      popupEmail.focus();
    } else if (storageEmail) {
      popupEmail.value = storageEmail;
      popupSubmit.focus();
    } else {
      popupPhone.focus();
    }

    popupEsc.addEventListener('click', onPopupClose);
    window.addEventListener('keydown', onEscPress);
    popupForm.addEventListener('submit', onFormSubmit);
  };

  var onPopupClose = function () {
    popup.classList.add('popup--hidden');
    popupEsc.removeEventListener('click', onPopupClose);
    window.removeEventListener('keydown', onEscPress);
  };

  var onEscPress = function (evt) {
    if (evt.key === 'Escape') {
      onPopupClose();
    }
  };

  var setPopupActive = function () {
    for (var i = 0; i < offersBtn.length; i++) {
      offersBtn[i].addEventListener('click', onPopupOpen);
    }
    cardsBtn.addEventListener('click', onPopupOpen);
  };

  var onFormSubmit = function (evt) {
    if (!popupPhone.value) {
      evt.preventDefault();
      evt.target.setCustomValidity('Это поле обязательно для заполнения');
    } else {
      evt.target.setCustomValidity('');
      if (isStorageSupport) {
        localStorage.setItem('popupPhone', popupPhone.value);
        localStorage.setItem('popupEmail', popupEmail.value);
      }
    }
  };

  setPopupActive();

})();
