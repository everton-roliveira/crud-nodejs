const exprees = require('express');
const app = exprees();
const router = exprees.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_angular_tdd', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => {
        console.log('DB connected!');
    })
    .catch(error => console.log(error));

// ROTA PRINCIPAL
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Microserviço de Produtos",
        version: "0.0.1"
    });
});
app.use(router);

module.exports = app;