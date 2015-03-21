var express = require('express');
var router = express.Router();
var User = require('../controllers/user.controller');

router.post('/users', User.createUser);
router.get('/users', User.findUsers);
router.get('/users/:user_id', User.findSingleUser);
router.put('/users/:user_id', User.updateUser);
router.delete('/users/:user_id', User.deleteUser);


module.exports = router;



