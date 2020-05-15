const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const app = express()

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('OK Computer - API de Frases do Allugo 2.0 (2020)'));
app.use(routes);

module.exports = app;