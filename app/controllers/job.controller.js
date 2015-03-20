var Job= require('../models/job.model');

var newJob = {

  createJob: function(req, res) {

    var jobObject = {
      title: String,
      timeline: String,
      createdAt: { type:Date, default: Date.now },
      details: String,
      comments: String
    };

    Job.create(userObject , function(err, data) {
      if (err) {
        res.send(err);
      }
      else {
      res.json(data);
      }
    });
  },  

  findJobs: function(req, res) {

    Job.find(function(err, data){
      if(err) {
        res.send(err);
      }
      else {
        res.json(data);
      }
    });
  },

  findOneJob: function(req, res) {

    Jbo.findById(req.params.job_id, function(err,data){
       if(err) {
        res.send(err);
      }
      else {
        res.json(data);
      }
    });
  },

  updateJob: function(req, res, next){
    Job.findById(req.params.job_id, function(err,data) {
      if (err) {
        res.send(err);
      }
      else if(data === null) {
        res.json({message: 'Job does not exit'})
      }
      else {
        data.title = req.body.title,
        data.timeline = req.body.timeline,
        data.details = req.body.details, 
        data.comments = req.body.comments

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
  },

  deleteJob: function(req, res) {
    Job.remove({_id: req.params.job_id}, function(err, data){
      if(err){
        res.send(err);
      }
      else {
        res.json({message: 'Successfully deleted' });
      }
    });
  }
  
}


module.exports = newJob;



