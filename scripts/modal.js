// Gets all modals in the page
const modals = document.querySelectorAll('.modal');

// Get the button that opens the modal and adds the onClick event for all buttons */
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', e => handleOpenModal(e));
});

// Get the <span> element that closes the modal
document.querySelectorAll('.close').forEach(span => {
  span.addEventListener('click', e => handleCloseModal(e));
});

document.querySelector('.mobile-close').addEventListener('click', e => handleCloseModal(e));


// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
  if (e.target.classList.contains('modal')) {
    handleCloseModal(e);
  }
}

function handleOpenModal(e) {
  console.log(e);
  e.preventDefault();
  modal = document.querySelector(e.target.getAttribute("href"));
  modal.style.display = "block";
}

function handleCloseModal(e) {
  for (const index in modals) {
    modals[index].style.display = typeof modals[index].style !== undefined && "none";
  }
}