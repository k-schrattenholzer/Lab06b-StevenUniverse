const express = require('express');
const app = express();
const port = process.env.port || 3000;

const { myNumber } = require('./utils.js');

app.get('/', (req, res) => {
  res.send(`Hello World! ${myNumber}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})