var mongoose = require('mongoose');
//export the module for it to be available to other files when it is called (using .exports method)
var Schema = mongoose.Schema;

var jobSchema = new Schema({
 title: String,
 timeline: String,
 createdAt: { type:Date, default: Date.now},
 details: text
});

mongoose.model('Users', jobSchema);
// module.export