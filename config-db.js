const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/db_angular_tdd';
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
};

mongoose.connect(url, options)
    .then(() => {
        console.log('DB connected!');
    })
    .catch(error => console.log(error));
module.exports = mongoose;

