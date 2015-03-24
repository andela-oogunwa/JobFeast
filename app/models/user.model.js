//begin modelling your schema(proceed from this file)
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: { type: Date, default: Date.now},
  fullname: String,
  secret_question: String,
  answer_to_question: String,
  date_of_birth: String,
  user_status: Number
});

module.exports = mongoose.model('User', userSchema);

