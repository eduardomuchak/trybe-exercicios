// Ao chamar a função doingThings:
const wakeUp = () => 'Acordando!';
const coffeeTime = () => 'Bora tomar café!';
const napTime = () => 'Partiu dormir!'

const doingThings = (func) => {
  const result = func();
  console.log(result);
}

doingThings(wakeUp);
doingThings(coffeeTime);
doingThings(napTime);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!