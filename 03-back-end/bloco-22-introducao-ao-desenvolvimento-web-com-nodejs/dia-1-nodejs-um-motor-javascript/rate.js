const rate = (imc) => {
  // switch (imc) {
  //   case (imc < 18.5):
  //     return("Abaixo do peso (magreza)");
  //     break;
  //   case (imc >= 18.5 && imc <= 24.9):
  //     return("Peso normal");
  //     break;
  //   case (imc >= 25 && imc <= 29.9):
  //     return("Acima do peso (sobrepeso)");
  //     break;
  //   case (imc >= 30 && imc <= 34.9):
  //     return("Obesidade grau I"); 
  //     break;
  //   case (imc >= 35 && imc <= 39.9):
  //     return("Obesidade grau II"); 
  //     break;
  //   case (imc >= 40):
  //     return("Obesidade grau III e IV"); 
  //     break;
  //   default:
  //     return(imc);
  //     break; 
  // }
  if (imc < 18.5) {
    return("Abaixo do peso (magreza)");
  }
  else if (imc >= 18.5 && imc <= 24.9) {
    return("Peso normal");
  }
  else if (imc >= 25 && imc <= 29.9) {
    return("Acima do peso (sobrepeso)");
  }
  else if (imc >= 30 && imc <= 34.9) {
    return("Obesidade grau I"); 
  }
  else if (imc >= 35 && imc <= 39.9) {
    return("Obesidade grau II"); 
  }
  else if (imc >= 40) {
    return("Obesidade grau III e IV"); 
  }
  else {
    return(typeof(imc));
  }
}

module.exports = rate;