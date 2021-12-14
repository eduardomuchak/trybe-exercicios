/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

n = 5

*****
*****
*****
*****
***** */

/*  1 - Definir coluna de asteriscos
    2 - Definir linha de asteriscos
 */

let n = 3;
let asterisco = '*';
let resultadoColunas = '';

for (let i = 0; i < n; i += 1) {
    resultadoColunas = asterisco + resultadoColunas;
}

for (let i = 0; i < n; i += 1) {
    console.log(resultadoColunas);
}
