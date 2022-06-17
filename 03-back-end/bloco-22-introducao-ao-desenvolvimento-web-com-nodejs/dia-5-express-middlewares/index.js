const express = require('express');
const bodyParser = require('body-parser');
require('express-async-errors');

const app = express();

app.use(bodyParser.json());

const sales = [
  {
    "productName": "Geladeira",
    "infos": {
      "saleDate": "30/06/2021",
      "warrantyPeriod": 12
    }
  },
];

app.get('/sales', (req, res) => {
  res.status(200).json(sales)
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
  }); 