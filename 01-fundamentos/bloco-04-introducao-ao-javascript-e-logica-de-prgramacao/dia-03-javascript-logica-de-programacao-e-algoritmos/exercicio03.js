/* 3- Considere o array de strings abaixo: 
          
          let array = ['java', 'javascript', 'python', 'html', 'css'];

Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */ 

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > biggestWord.length) {
    biggestWord = array[i];
  }
}

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < smallestWord.length) {
    smallestWord = array[i];
  }
}

console.log(biggestWord);
console.log(smallestWord);