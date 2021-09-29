require ('dotenv').config();

const express = require('express');

const app = express();
const cors = require('cors');

const { characters, quotes } = require('./data.js');

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        "Hi!":"Hello",
        "CurrentRoutes": "/quotes & /characters & /characters/id"
    })
})

app.get('/quotes', (req, res) => {
    res.json(quotes)
})

app.get('/quotes/:id', (req, res) => {
    const matchingQuote = quotes.find(quote => quote.id === Number(req.params.id));
    res.json(matchingQuote)
})

app.get('/characters', (req, res) => {
    res.json(characters)
})

app.get('/characters/:id', (req, res) => {
    const matchingChar = characters.find(gem => gem.id === Number(req.params.id));
    res.json(matchingChar)
})

module.exports = {
    app,
}