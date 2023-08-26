const fontSizeControl = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

textElement.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.addEventListener('input', onInput);

function onInput(event) {
  textElement.style.fontSize = event.target.value + 'px';
}
