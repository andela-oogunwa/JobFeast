var express = require('express');
var router = express.Router();
var Job = require('../controllers/job.controller');

router.post('/jobs', Job.createJob);
router.get('/jobs', Job.findJobs);
router.get('/jobs/:job_id', Job.findOneJob);
router.put('/jobs/:job_id', Job.updateJob);
router.delete('/jobs/:job_id', Job.deleteJob);


module.exports = router;
