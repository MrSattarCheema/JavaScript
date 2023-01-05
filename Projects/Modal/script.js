'use strict';
const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const hiddenModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const openModel = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < showModal.length; i++) {
    // console.log(i);
    showModal[i].addEventListener('click', openModel);
}
const closeModel = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
hiddenModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModel();
    }
})