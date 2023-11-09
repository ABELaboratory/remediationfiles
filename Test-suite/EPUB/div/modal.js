// Button to trigger the modal window
var button = document.querySelector('.modal__show');

// Open modal window on click
button.addEventListener('click', showModal);

// Show modal
function showModal() {
  // Close all open modal windows
  removeModal();
  // Select the modal window
  var modal = document.getElementById('modal');
  // Show the window
  modal.classList.add('modal--visible');
  // Add keydown event
  modal.addEventListener('keydown', function(e) {
    // Close the window by pressing the Esc-key
    if(e.keyCode === 27) {
      removeModal();
    }
  });
}

// Close the window by clicking the close button
document.querySelector('.modal__close').addEventListener('click', removeModal);

// Remove the modal window if it's visible
function removeModal() {
  var visibleClass = 'modal--visible';
  if (document.querySelector('.' + visibleClass)) {
    document.querySelector('.' + visibleClass).classList.remove(visibleClass);
  }
}