var mongoose = require('mongoose');
var User = require('../models/user.model');
console.log('haha');

  exports.createUser = function(req, res, next) {

    var userObject = {
       fullname: req.body.fullname,
       username: req.body.username, 
       password: req.body.password, 
       secret_question: req.body.secret_question, 
       answer_to_question: req.body.answer_to_question, 
       date_of_birth: req.body.date_of_birth,
       user_status: req.body.user_status
    };

    User.create(userObject , function(err, data) {
      if (err) {
        res.send(err);
      }
      else {
      res.json(data);
      }
      next();
    });
  };  

  exports.findUsers = function(req, res) {
    console.log('over huur');
    User.find(function(err, data){
      if(err) {
        res.send(err);
      }
      else {
        res.json(data);
      }
    });
  };

  exports.findSingleUser = function(req, res, next) {

    User.findById(req.params.user_id, function(err,data){
       if(err) {
        res.send(err);
      }
      else {
        res.send(data);
      }
      next();
    });
  };

  exports.updateUser = function(req, res, next){
    User.findById(req.params.user_id, function(err,data) {
      if (err) {
        res.send(err);
      }
      else if(data === null) {
        res.json({message: 'User does not exit'})
      }
      else {
        data.fullname = req.body.fullname,
        data.username = req.body.username, 
        data.password = req.body.password, 
        data.secret_question = req.body.secret_question, 
        data.answer_to_question = req.body.answer_to_question, 
        data.date_of_birth = req.body.date_of_birth,
        data.user_status = req.body.user_status

        data.save(function(err) {
           if (err) {
             res.send(err);
           }

           else{
             res.json(data);
           } 
           next();
         });
      }
    });
  };

  exports.deleteUser = function(req, res) {
    User.remove({_id: req.params.user_id}, function(err, data){
      if(err){
        res.send(err);
      }
      else {
        res.json({message: 'Successfully deleted' });
      }
      next();
    });
  };
  



