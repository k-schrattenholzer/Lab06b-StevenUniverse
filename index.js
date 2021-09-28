const express = require('express');
const app = express();
const port = process.env.port || 3000;

const { myNumber } = require('./utils.js');

app.get('/', (req, res) => {
  res.send({
      myFavoriteNumber:`My favorite number is ${myNumber}`
    })
})

app.get('/quotes', (req, res) => {
  res.send({
      myFavoriteNumber:`/quotes`
    })
})

app.get('/characters', (req, res) => {
  res.send({
      myFavoriteNumber:`/characters`
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})