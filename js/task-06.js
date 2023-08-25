const symbolsInput = document.querySelector('#validation-input');


symbolsInput.addEventListener('blur', () => {
  const symbolsLength = symbolsInput.value.length;
  const requiredLength = parseInt(symbolsInput.getAttribute('data-length'));

  symbolsInput.classList.remove('valid', 'invalid');

  if (symbolsLength === requiredLength) {
    symbolsInput.classList.add('valid');
  } else {
    symbolsInput.classList.add('invalid');
  }
});

