const textToDisplay = document.getElementById("text");
const btnTest = document.getElementById("button_test");
let clickCount = 0;

btnTest.addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1);