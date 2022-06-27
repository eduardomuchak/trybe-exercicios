const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const Author = require('./controllers/Authors');
const errorMiddleware = require('./middlewares/errors');

const PORT = 3333;
const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res) => res.send('Hello World!'));
app.get('/authors', rescue(Author.getAll));
app.get('/authors/:id', rescue(Author.findById));
app.post('/authors', rescue(Author.createAuthor));

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});