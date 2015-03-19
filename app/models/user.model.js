
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
   username: String,
   password: String,
   createdAt: { type: Date, default: Date.now},
   fullname: String,
   secret_question: String,
   answer_to_question: String,
   date_of_birth: String
});

module.exports = mongoose.model('User', userSchema);



