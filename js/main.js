const elHeader = document.querySelector('.header')
const elNavBtn = elHeader.querySelector('.js-header-btn')

elNavBtn.addEventListener('click', function() {
   elHeader.classList.toggle('header--active')
})