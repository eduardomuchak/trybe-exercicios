const a = 30;
const b = 60;
const c = 90;

let somaDosAngulos = a + b + c;
let todosOsAngulosPositivos = a > 0 && b > 0 && c > 0;

if(todosOsAngulosPositivos){
    if (somaDosAngulos === 180){
        console.log(true);
    } else {
        console.log(false);
    } 
}
else
    console.log("Erro")

/* Referencia do if dentro de outro if usado do gabarito da Trybe */