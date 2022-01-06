/* 3- Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
***** */

let n = 9;
let asterisco = '*'
let colunasDinamicas = ''
let espaços = n;

for (let iLinhas = 0; iLinhas <= n; iLinhas += 1) {
    for (let iColunas = 0; espaços <= iLinhas; iColunas += 1) {
        if(espaços > n){
            console.log(espaços + n)
        }
        else if(n > espaços){
            console.log(n + espaços)
        }
    }
}