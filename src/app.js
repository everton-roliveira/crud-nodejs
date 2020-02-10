const exprees = require('express');
const app = exprees();
const http = require('http');
const mongoose = require('mongoose');


const port = normalizaPort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port, async () => {
    await mongoose.connect('mongodb://localhost:27017/db_angular_tdd', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
        .then(() => {
            console.log('DB connected!');
            console.log(`API rodando porta ${port}`)
        })
        .catch(error => console.log(error));
});


function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}