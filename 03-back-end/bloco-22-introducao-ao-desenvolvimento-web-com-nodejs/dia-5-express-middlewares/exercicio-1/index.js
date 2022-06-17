const express = require('express');
const bodyParser = require('body-parser');
require('express-async-errors');

const app = express();

app.use(bodyParser.json());

const sales = [
  {
    productName: 'Geladeira',
    infos: {
      saleDate: '30/06/2021',
      warrantyPeriod: 12,
    },
  },
];

app.get('/sales', (_req, res) => {
  res.status(200).json(sales);
});

app.post('/sales', (req, res) => {
  const { productName, infos } = req.body;

  if (productName && productName.length <= 4)
    return res.status(400).json({
      message: 'O campo productName deve ter pelo menos 4 caracteres!',
    });

  if (!productName)
    return res
      .status(400)
      .json({ message: 'O campo productName é obrigatório!' });

  if (!infos)
    return res.status(400).json({ message: 'O campo infos é obrigatório' });

  const { saleDate, warrantyPeriod } = infos;

  if (!saleDate || !warrantyPeriod)
    return res.status(400).json({ message: 'O campo infos está incompleto' });

  if (!saleDate)
    return res
      .status(400)
      .json({ message: 'O campo saleDate não é uma data válida' });

  sales.push({ productName, infos });
  res.status(201).json({ message: 'Produto inserido com sucesso' });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
