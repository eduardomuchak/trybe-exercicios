const custo = 100;
const valorVenda = 130

if(custo >= 0 && valorVenda >= 0){
    console.log("Lucro de mil unidades = R$ " + (valorVenda - (custo * 1.2)) * 1000)
}
else{
    console.log("Erro! Valor inserido é menor do que zero.")
}