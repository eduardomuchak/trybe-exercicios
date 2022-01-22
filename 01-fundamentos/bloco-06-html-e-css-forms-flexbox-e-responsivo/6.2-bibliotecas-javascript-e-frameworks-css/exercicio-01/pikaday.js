var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  toString(date, format) {
    // você deve fazer a formatação com base no formato passado, 
    // mas retornaremos apenas 'D / M / AAAA' para simplificar 
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString é o resultado do método `toString`
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});