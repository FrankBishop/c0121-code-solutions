var contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', submitForm);
function submitForm(event) {
  event.preventDefault();
  var nameResult = contactForm.elements.name.value;
  var emailResult = contactForm.elements.email.value;
  var messageResult = contactForm.elements.message.value;
  var values = {
    name: nameResult,
    email: emailResult,
    message: messageResult
  };
  console.log(values);
  contactForm.reset();
}
