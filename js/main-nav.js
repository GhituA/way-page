'use strict';

(function () {
  var navList = document.querySelector('.main-nav');
  var navBtn = document.querySelector('.main-nav__toggle');
  var siteList = document.querySelector('.site-list');

  var setMainNavActive = function () {
    navBtn.addEventListener('click', function () {
      navList.classList.toggle('main-nav--js');
      navBtn.classList.toggle('main-nav__toggle--open');
      siteList.classList.toggle('site-list--js');
    });

    navList.classList.add('main-nav--js');
    navBtn.classList.remove('main-nav__toggle--hidden');
  };

  setMainNavActive();

})();
