// 'use strict';
//
// (function () {
//   var MAX_EMAIL_LENGTH = 30;
//
//   var adForm = document.querySelector('.ad-form');
//   var titleField = adForm.querySelector('#title');
//
// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.
//
//
//
// var onTitleInput = function (evt) {
//   var valueLength = evt.target.value.length;
//   if (!valueLength) {
//     evt.target.setCustomValidity('Это поле обязательно для заполнения');
//     setRedBorder(evt.target);
//   } else if (valueLength < MIN_TITLE_LENGTH) {
//     evt.target.setCustomValidity('Минимальная длина заголовка: 30 символов. Введите ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
//     setRedBorder(evt.target);
//   } else if (valueLength > MAX_TITLE_LENGTH) {
//     evt.target.setCustomValidity('Минимальная длина заголовка: 100 символов. Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
//     setRedBorder(evt.target);
//   } else {
//     evt.target.setCustomValidity('');
//     removeBorder(evt.target);
//   }
// };
//
// })();
//
//
// var form = popup.querySelector("form");
// var login = popup.querySelector("[name=login]");
// var password = popup.querySelector("[name=password]");
//
// var isStorageSupport = true;
//
// try {
//   storagePhone = localStorage.getItem("popupPhone");
// } catch (err) {
//   isStorageSupport = false;
// }
//
// try {
//   storageEmail = localStorage.getItem("popupEmail");
// } catch (err) {
//   isStorageSupport = false;
// }
//
//
// if (storagePhone) {
//   popupPhone.value = storagePhone;
//   popupEmail.focus();
// } else if (storageEmail) {
//   popupEmail.value = storageEmail;
//   popupSubmit.focus();
// } else {}
//
// link.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.add("modal-show");
//
//
// });
//
// close.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.remove("modal-show");
//   popup.classList.remove("modal-error");
// });
//
// form.addEventListener("submit", function (evt) {
//   if (!login.value || !password.value) {
//     evt.preventDefault();
//     popup.classList.remove("modal-error");
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add("modal-error");
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem("login", login.value);
//     }
//   }
// });
//
//
// var adults = document.querySelector("[name=adults]");
// var children = document.querySelector("[name=children]");
// var storageadults = localStorage.getItem("adults");
// var storagechildren = localStorage.getItem("children");
// var isStorageSupport = true;
//
//
//
// popup.classList.add("index-search__form-toggle");
//
// link.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.toggle("index-search__form-toggle");
//   popup.classList.remove("index-search__form-error");
//   startdate.focus();
//   if (storageadults) {
//     adults.value = storageadults;
//   }
//   if (storagechildren) {
//     children.value = storagechildren;
//   }
// });
