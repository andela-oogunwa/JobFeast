//require mongoose module
var mongoose = require('mongoose');
//export the module for it to be available to other files when it is called (using .exports method)
var Schema = mongoose.Schema;

var userSchema = new Schema({
 username: String,
 password: String,
 createdAt: { type:Date, default: Date.now},
 fullname: String,
 secret_question: String,
 answer_to_question: String,
 date_of_birth: String
});

mongoose.model('Users', userSchema);
// module.exports = mongoose.model('info' , {
//   name: {
//     type : String ,
//     default: ''
//   }
// });



