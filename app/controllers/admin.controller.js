// var Admin= require('../models/admin.model');

// var newAdmin = {

//   createAdmin: function(req, res) {

//     var adminObject = {
//        fullname: req.body.fullname,
//        username: req.body.username, 
//        password: req.body.password, 
//        secret_question: req.body.secret_question, 
//        answer_to_question: req.body.answer_to_question, 
//        date_of_birth: req.body.date_of_birth 
//     };

//     Admin.create(userObject , function(err, data) {
//       if (err) {
//         res.send(err);
//       }
//       else {
//       res.json(data);
//       }
//     });
//   },  

//   findAllAdmin: function(req, res) {

//     Admin.find(function(err, data){
//       if(err) {
//         res.send(err);
//       }
//       else {
//         res.json(data);
//       }
//     });
//   },

//   findOneAdmin: function(req, res) {

//     Admin.findById(req.params.admin_id, function(err,data){
//        if(err) {
//         res.send(err);
//       }
//       else {
//         res.json(data);
//       }
//     });
//   },

//   deleteAdmin: function(req, res) {
//     Admin.remove({_id: req.params.admin_id}, function(err, data){
//       if(err){
//         res.send(err);
//       }
//       else {
//         res.json({message: 'Successfully deleted' });
//       }
//     });
//   }
  
// }


// module.exports = newAdmin;
