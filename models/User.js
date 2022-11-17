const mongoose = require('mongoose');


var UserSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    

});
module.exports = mongoose.model('User', UserSchema);