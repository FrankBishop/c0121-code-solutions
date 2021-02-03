var openModal = document.querySelector('.open-modal-button');
var modal = document.querySelector('.modal');
var container = document.querySelector('.container');
var closeModal = document.querySelector('.modal-button');
var body = document.querySelector('body');
openModal.addEventListener('click', openModalFunction);
closeModal.addEventListener('click', closeModalFunction);

function openModalFunction(event) {
  // console.log('it works');
  modal.className = 'modal-opened';
  container.className = 'container-opened';
  body.className = 'body-modal-open';
}

function closeModalFunction(event) {
  // console.log('it closes');
  modal.className = 'modal';
  container.className = 'container';
  body.className = 'modal-page';
}
