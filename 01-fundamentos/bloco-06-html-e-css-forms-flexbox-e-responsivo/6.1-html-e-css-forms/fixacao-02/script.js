// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function nadaAcontece(event) {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', nadaAcontece);
INPUT_CHECKBOX.addEventListener('click', nadaAcontece);

//Terceiro exercício retirado do gabarito Trybe
INPUT_TEXT.addEventListener('keypress', (event) => {
  const character = event.key;
  if (character !== 'a') {
    event.preventDefault();
  }
});