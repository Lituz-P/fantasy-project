const openModalButton = document.getElementById('littleAngels');
const closeModalButton = document.getElementById('close-modal');
const modalContainer = document.querySelector('.modal-container');

openModalButton.addEventListener('click', () => {
  modalContainer.classList.add('open');
});

closeModalButton.addEventListener('click', () => {
  modalContainer.classList.remove('open');
});