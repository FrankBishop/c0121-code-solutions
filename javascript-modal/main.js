var openModal = document.querySelector('.open-modal-button');
var modal = document.querySelector('.modal');
var container = document.querySelector('.container');
var closeModal = document.querySelector('.modal-button');
var body = document.querySelector('.page');
openModal.addEventListener('click', openModalFunction);
closeModal.addEventListener('click', closeModalFunction);

function openModalFunction(event) {
  container.className = 'container-opened';
  body.className = 'modal-page';
  modal.className = 'modal-opened';
  openModal.className = 'open-modal-button-open';
}

function closeModalFunction(event) {
  modal.className = 'modal';
  container.className = 'container';
  body.className = 'modal-page';
}
