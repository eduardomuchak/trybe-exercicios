const dropdownEstado = document.querySelector('#dropdownEstado');
const estadosBrasileiros = ['Acre - AC', 'Alagoas - AL', 'Amapá - AP', 'Amazonas - AM', 'Bahia - BA', 'Ceará - CE', 'Distrito Federal - DF', 'Espírito Santo - ES', 'Goiás - GO', 'Maranhão - MA', 'Mato Grosso - MT', 'Mato Grosso do Sul - MS', 'Minas Gerais - MG', 'Pará - PA', 'Paraíba - PB', 'Paraná - PR', 'Pernambuco - PE', 'Piauí - PI', 'Roraima - RR', 'Rondônia - RO', 'Rio de Janeiro - RJ', 'Rio Grande do Norte - RN', 'Rio Grande do Sul - RS', 'Santa Catarina - SC', 'São Paulo - SP', 'Sergipe - SE', 'Tocantins - TO'];
//const botaoSubmit = ;
const data = document.querySelector('#data');

//

function criarEstados() {
    for (let i = 0; i < estadosBrasileiros.length; i += 1) {
    let opcaoEstado = document.createElement('option');
    opcaoEstado.innerText = estadosBrasileiros[i];
    opcaoEstado.value = estadosBrasileiros[i];
    dropdownEstado.appendChild(opcaoEstado);
  }
}

dropdownEstado.addEventListener('click',criarEstados)

//

/* if (data === 'mm/dd/yyyy') {
  alert('Erro! Insira a data corretamente!')
} */