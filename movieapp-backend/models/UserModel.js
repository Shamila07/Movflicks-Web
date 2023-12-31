var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('user_account', userSchema);

