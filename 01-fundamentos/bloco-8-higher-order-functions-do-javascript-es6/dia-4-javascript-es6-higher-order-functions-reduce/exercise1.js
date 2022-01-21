const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => {
  const juncaoArrays = (acumulador, valorAtual) => acumulador.concat(valorAtual);
  return arrays.reduce(juncaoArrays)
};

console.log(flatten());
