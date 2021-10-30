
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting to mongodb'));

db.once('open',function(){
    console.log("Connected to databse")
})

module.exports = db;
