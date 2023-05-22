const menuToggle = document.querySelector(`.js-open-menu`),
  menuNav = document.querySelector('.js-menu-container'),
  closeNav = document.querySelector('.js-close-menu'),
  infoMenu = document.getElementById('dropdown-info-menu'),
  navInfoMenu = document.querySelector('.nav-content--dropdown'),
  arrowInfo = document.querySelector('.nav__info-arrow'),
  mobileInfoMenu = document.getElementById('mobile-dropdown-info-menu'),
  mobileNavInfoMenu = document.querySelector('.mobile-nav-content--dropdown'),
  LogoHeader = document.querySelector('.logo-JM'),
  LogoHeaderHover = document.querySelector('.logo-JM-hover'),
  mobileArrowInfo = document.querySelector('.mobile-nav__info-arrow'),
  itemSearch = document.querySelector('.header-box__item--search'),
  linkSearch = document.querySelector('.header-box__link-i--search'),
  inputSearch = document.querySelector('.header-box__input-search');
//Listener para abrir el menu desplegable
menuToggle.addEventListener('click', () => {
  menuNav.classList.toggle('is-openX');
  menuToggle.classList.toggle('rotate');
  closeNav.classList.remove('rotate');
});
//Listener para cerrar el menu desplegable con la "X"
closeNav.addEventListener('click', () => {
  menuNav.classList.toggle('is-openX');
  closeNav.classList.toggle('rotate');
  menuToggle.classList.remove('rotate');
});
//Listener para q se abra el menu de al darle click al btn "informacion"
infoMenu.addEventListener('click', () => {
  navInfoMenu.classList.toggle('is-openY');
  navInfoMenu.classList.toggle('hide');
  arrowInfo.classList.toggle('rotate');
});
//Listener para q se abra el menu de al darle click al btn "informacion q esta desntro del menu desplegable en mobile"
mobileInfoMenu.addEventListener('click', () => {
  mobileNavInfoMenu.classList.toggle('mobile-is-openY');
  mobileNavInfoMenu.classList.toggle('hide');
  mobileArrowInfo.classList.toggle('rotate');
});
//Listener para cambiar de una imagen a otra q parece hover del header
LogoHeader.addEventListener('mouseenter', () => {
  LogoHeader.classList.toggle('hide-img');
  LogoHeaderHover.classList.toggle('hide-img');
});
LogoHeaderHover.addEventListener('mouseleave', () => {
  LogoHeader.classList.toggle('hide-img');
  LogoHeaderHover.classList.toggle('hide-img');
});
itemSearch.addEventListener('mouseover', () => {
  inputSearch.style.width = '280px';
  linkSearch.style.background =
    'linear-gradient(to left, #26d1f3,#bfedf7, #e4eef0)';
});
itemSearch.addEventListener('mouseout', () => {
  inputSearch.style.width = '0px';
  linkSearch.style.background = '#fff';
});
