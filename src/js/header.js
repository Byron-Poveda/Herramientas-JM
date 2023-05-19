const menuToggle = document.querySelector(`.js-open-menu`);
const menuNav = document.querySelector('.js-menu-container');
const closeNav = document.querySelector('.js-close-menu');
const infoMenu = document.getElementById('dropdown-info-menu');
const navInfoMenu = document.querySelector('.nav-content--dropdown');
const arrowInfo = document.querySelector('.nav__info-arrow');
const mobileInfoMenu = document.getElementById('mobile-dropdown-info-menu');
const mobileNavInfoMenu = document.querySelector(
  '.mobile-nav-content--dropdown'
);
const mobileArrowInfo = document.querySelector('.mobile-nav__info-arrow');
menuToggle.addEventListener('click', () => {
  menuNav.classList.toggle('is-openX');
  menuToggle.classList.toggle('rotate');
  closeNav.classList.remove('rotate');
});
closeNav.addEventListener('click', () => {
  menuNav.classList.toggle('is-openX');
  closeNav.classList.toggle('rotate');
  menuToggle.classList.remove('rotate');
});
infoMenu.addEventListener('click', () => {
  navInfoMenu.classList.toggle('is-openY');
  navInfoMenu.classList.toggle('hide');
  arrowInfo.classList.toggle('rotate');
});
mobileInfoMenu.addEventListener('click', () => {
  mobileNavInfoMenu.classList.toggle('mobile-is-openY');
  mobileNavInfoMenu.classList.toggle('hide');
  mobileArrowInfo.classList.toggle('rotate');
});
