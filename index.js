const express = require('express');
const app = express();
const port = process.env.port || 3000;

const { characters } = require('./data.js');

app.get('/quotes', (req, res) => {
  res.send({
      myFavoriteNumber:`/quotes`
    })
})

app.get('/characters', (req, res) => {
  res.send(characters)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})