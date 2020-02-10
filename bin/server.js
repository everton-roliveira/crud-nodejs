const app = require('../src/app')
const http = require('http');

const port = normalizaPort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
console.log(`API rodando porta ${port}`)

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