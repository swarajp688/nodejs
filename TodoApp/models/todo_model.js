const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task : String
})

const Task= mongoose.model('Task',todoSchema);

module.exports = Task;