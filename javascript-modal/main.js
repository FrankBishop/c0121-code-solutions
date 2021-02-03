var openModal = document.querySelector('.open-modal-button');
var container = document.querySelector('.container');
var modal = document.querySelector('.modal');
var closeModal = document.querySelector('.modal-button');

openModal.addEventListener('click', openModalFunction);
closeModal.addEventListener('click', closeModalFunction);

function openModalFunction(event) {
  container.className = 'container-open';
  modal.className = 'modal-open';
}

function closeModalFunction(event) {
  modal.className = 'container';
  container.className = 'container';
}
