var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User'} // Refer to User table by user ID
});


module.exports = mongoose.model('Message', schema);