function toggleButton(className) {
  const button = document.querySelector(`${className}`);
  if (!button.classList.contains('is-toggled')) {

    turnOffPreviousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
};


function turnOffPreviousButton() {
   const previousButton = document.querySelector('.is-toggled');

   if (previousButton) {
    previousButton.classList.remove('is-toggled');
   }

}

function changeButton() {
 const button = document.querySelector('.js-subscribe-button');
 if (button.innerHTML = 'Subscribe' && !button.classList.contains('is-subscribed')) {
  button.innerHTML = 'Subscribed';
  button.classList.add('is-subscribed');
 } else {
  button.innerHTML = 'Subscribe';
  button.classList.remove('is-subscribed');
 }
}

