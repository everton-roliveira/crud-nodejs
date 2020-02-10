const exprees = require('express');
const bodyParser = require('body-parser');
const app = exprees();
const router = exprees.Router();
const db = require('../config-db');

// ROTA PRINCIPAL
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Microserviço de Produtos",
        version: "0.0.1"
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

module.exports = app;