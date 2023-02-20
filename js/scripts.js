let menu = document.querySelector('.nav');
let menuBTN = document.querySelector('.menu-trigger');

menuBTN.addEventListener('click', function (e) {
 this.classList.toggle('open');
 menu.classList.toggle('open');
 document.body.classList.toggle('no-scroll');
});

let copyBTN = document.querySelectorAll('.copy-result');
copyBTN.forEach(item => {
 item.addEventListener('click', changState);
})

function changState() {
 this.classList.add('active');
 this.textContent = 'Copied!'
 setTimeout(() => {
  this.classList.remove('active');
  this.textContent = 'Copy!';
 }, 2000);
}


let form = document.querySelector('.app__form');
let formLabel = form.querySelector('.form__label');

form.addEventListener('submit', errorDemo)

function errorDemo(e) {
 e.preventDefault();
 formLabel.classList.add('error');
 setTimeout(() => {
  formLabel.classList.remove('error');
 }, 2000);
}