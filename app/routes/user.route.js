var express = require('express');
var router = express.Router();
var User = require('../controllers/user.controller');

// load our public/index.html file
// router.get('*', function(req, res) {
//    res.sendfile('./public/index.html'); 
// });

router.post('/users', User.createUser);
router.get('/users', User.findUsers);
router.get('/users/:user_id', User.findSingleUser);
router.put('/users/:user_id', User.updateUser);
router.delete('/users/:user_id', User.deleteUser);


module.exports = router;



