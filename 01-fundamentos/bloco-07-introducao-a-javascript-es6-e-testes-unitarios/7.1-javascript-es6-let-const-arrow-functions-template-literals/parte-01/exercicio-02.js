/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉 */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortedOddsAndEvens = () => {
  oddsAndEvens.sort((a,b) => a - b);
  return oddsAndEvens;
}
const arrayOrdenado = sortedOddsAndEvens();

console.log(`"Os números ${arrayOrdenado} se encontram ordenados de forma crescente!".`);
