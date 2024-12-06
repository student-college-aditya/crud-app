const mongoose = require('mongoose');

const mongourl = 'mongodb://127.0.0.1:27017/Crud_app';

mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ConnectDB = mongoose.connection;

ConnectDB.on('connected', () => {
    console.log("Connected to Server");
});

ConnectDB.on('error', (err) => {
    console.error("Mongodb connection error:", err); // Fixed: Pass the `err` parameter
});

ConnectDB.on('disconnected', () => {
    console.log("Mongodb disconnected");
});

module.exports = ConnectDB;
