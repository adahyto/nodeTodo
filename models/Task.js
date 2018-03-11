const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    
    name: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        reqired: false
    },
    details: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('task', TaskSchema);