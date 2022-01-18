const verificadorNumero = (numeroPessoa, numeroSorteado) => numeroPessoa === numeroSorteado;

const loteria = (numeroPessoa, callback) => {
  const numeroSorteado = Math.floor((Math.random() * 5) + 1);
 
  return callback(numeroPessoa, numeroSorteado) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(loteria(1, verificadorNumero));
