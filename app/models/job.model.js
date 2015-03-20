var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var jobSchema = new Schema({
  title: String,
  timeline: String,
  createdAt: { type:Date, default: Date.now },
  details: String,
  comments: String
});

module.exports = mongoose.model('Jobs', jobSchema);