var openModal = document.querySelector('.open-modal-button');
var modal = document.querySelector('.container');
var page = document.querySelector('.page');
var closeModal = document.querySelector('.modal-button');

openModal.addEventListener('click', openModalFunction);
closeModal.addEventListener('click', closeModalFunction);

function openModalFunction(event) {
  modal.className = 'container-open';
  page.className = 'page-open';
}

function closeModalFunction(event) {
  modal.className = 'container';
  page.className = 'page';
}
