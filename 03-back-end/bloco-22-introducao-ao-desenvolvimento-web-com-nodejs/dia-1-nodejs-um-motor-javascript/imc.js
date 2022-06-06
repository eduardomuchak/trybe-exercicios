const { questionFloat } = require('readline-sync');
const rate = require('./rate');
    
const imc = () => {
  const peso = questionFloat("Qual seu peso? ");
  const altura = questionFloat("Qual sua altura? ");
  return((`Seu IMC é: ${(peso / altura ** 2).toFixed(2)} e sua classificação é ${rate(peso / altura ** 2)}`))
  // return(rate(peso / altura ** 2))
};

console.log(imc());

module.exports = imc;