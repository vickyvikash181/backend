const mongoose = require('mongoose');


var TaskSchema= mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    myday: {
        type: Boolean,
        required: true
    },
    important: {
        type: Boolean,
        required: true
    }

})

module.exports = mongoose.model('User',TaskSchema);