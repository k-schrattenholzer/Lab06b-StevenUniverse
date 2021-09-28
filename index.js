const express = require('express');
const app = express();
const port = process.env.port || 3000;

const { characters, quotes } = require('./data.js');

app.get('/quotes', (req, res) => {
    res.json(quotes)
})

app.get('/characters', (req, res) => {
    res.json(characters)
})

app.get('/characters/:id', (req, res) => {
    const matchingChar = characters.find(gem => gem.id === Number(req.params.id));
    res.json(matchingChar)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})