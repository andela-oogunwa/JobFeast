var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var jobSchema = new Schema({
   title: String,
   timeline: String,
   createdAt: { type:Date, default: Date.now },
   details: String
});

mongoose.model('Jobs', jobSchema);