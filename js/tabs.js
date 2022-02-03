// 'use strict';
//
// (function () {
//
//   var buttonsLink = document.querySelectorAll('.buttons__link');
//   var cardsItem = document.querySelectorAll('.cards__item');
//
//
//   var onCardClick = function (tab, card) {
//     tab.addEventListener("click", function () {
//
//       var tabActive = document.querySelector('.buttons__link--active');
//       var cardActive = document.querySelector('.cards__item--active');
//
//       if (cardActive || tabActive) {
//         tabActive.classList.remove('buttons__link--active');
//         cardActive.classList.remove('cards__item--active');
//       }
//
//       tab.classList.add('buttons__link--active');
//       card.classList.add('cards__item--active');
//     });
//   }
//
//
//   for (var i = 0; i < buttonsLink.length; i++) {
//     onCardClick(buttonsLink[i], cardsItem[i])
//   }
//
//   // can't click again  can't focus again
//
// })();
