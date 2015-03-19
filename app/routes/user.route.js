var express = require('express');
var router = express.Router();
var User = require('../controllers/user.controller');

router.post('/user/newUser', User.createUser);

// router.get('/user')



module.exports = router;



// router.use('/', function(req, res, next){
//   console.log("This work aint beans");
//   next();//this is a middleware
// })

// router.get('/', function(req, res, next){
//   res.json({message:'Jide likes pinching'});
//   next();
// });
// router.route('/bears')
//  .post(function(req, res){
//     var bear = new Bear();
//     bear.name = req.body.name;
//     bear.class = req.body.class;

//     bear.save(function(err){
//       if(err) {
//         console.log('connection error', err);
//       }
//       else {
//         console.log('connection succesful');
//       }
//       res.json({message: 'Bear created!'});
//     })
//   })
//   .get(function(req, res){
//     Bear.find(function(err, bears){
//       if(err) {
//         res.send(err);
//       }
//       else {
//         res.json(bears);
//       }
//     });
//    // body...
//   });