const fontSizeControl = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

fontSizeControl.addEventListener('input', onInput);

function onInput(event) {
  textElement.style.fontSize = event.target.value + 'px';
}
