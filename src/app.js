const exprees = require('express');
const bodyParser = require('body-parser');
const app = exprees();
const db = require('../config-db');

// Carrega as rotas
const indexRouter = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(indexRouter); 

module.exports = app;