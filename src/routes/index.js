const router = require('express').Router();

const userRouter = require('./user-route');

// ROTA PRINCIPAL
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Microserviço de Produtos",
        version: "0.0.1"
    });
});

router.use('/users', userRouter);

module.exports = router;