//require the nerd model
var newUser = require('./controllers/user.controller')();
var User = require('./models/user');

module.exports = function(app){

      router.post('/user/newUser', newUser);

});

// app.get('/api/users', function(req, res) {
//     // use mongoose to get all nerds in the database
//     console.log('from the routes',req.body);
//     Info.find(function(err, users) {

//         // if there is an error retrieving, send the error. 
//                         // nothing after res.send(err) will execute
//         if (err)
//             res.send(err);

//         res.json(users); // return all infos in JSON format
//     });
// });


// // route to handle getting just one nerd in the database
// // app.get('/api/infos/:infoId', function(req, res) {
// //   console.log('getting just one',req.params.name);
// //   res.send('This is to get one info');
// // });


// // route to handle creating goes here (app.post)
// app.post('/api/newInfo', function(req, res){
//   var name = req.body.name;
//   res.send('this is good for kemi');

// });


// // route to handle delete goes here (app.delete)

// // frontend routes =========================================================
// // route to handle all angular requests
// app.get('*', function(req, res) {
//     res.sendfile('./public/index.html'); // load our public/index.html file
// });

 };