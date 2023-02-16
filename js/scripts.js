let menu = document.querySelector('.nav');
let menuBTN = document.querySelector('.menu-trigger');

menuBTN.addEventListener('click', function (e) {
 this.classList.toggle('open');
 menu.classList.toggle('open');
 document.body.classList.toggle('no-scroll');
});
