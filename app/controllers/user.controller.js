var User= require('../models/user.model');

var newUser = {

   createUser: function(req, res) {

    var userObject = {
       fullname: req.body.fullname,
       username: req.body.username, 
       password: req.body.password, 
       secret_question: req.body.secret_question, 
       answer_to_question: req.body.answer_to_question, 
       date_of_birth: req.body.date_of_birth 
    };

    User.create(userObject , function(err, data) {
       if (err) {
         res.send(err);
       }
        res.json(data);
    });
  }
}
  module.exports = newUser;


