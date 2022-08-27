let burger = document.querySelector('.burger');
let navBar = document.querySelector('.header');
let nav = document.querySelector('.nav');
let searchContener = document.querySelector('.search-contener');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-resp');
    searchContener.classList.toggle('nav-resp');
    navBar.classList.toggle('h-nav-bar');
})