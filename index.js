const express = require('express');
const app = express();
const port = process.env.port || 3000;

const { characters, quotes } = require('./data.js');

app.get('/quotes', (req, res) => {
  res.send(quotes)
})

app.get('/characters', (req, res) => {
  res.send(characters)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})