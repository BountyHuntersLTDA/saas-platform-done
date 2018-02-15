'use strict';

const passport = require('../config/passport');
const jobsController = require('../modules/jobs/controllers/jobs');

module.exports = app => {
    app.get('/api/v1/jobs', passport.authenticate('jwt'), jobsController.listJobs);
    app.get('/api/v1/jobs/:id', passport.authenticate('jwt'), jobsController.detailJob);
    app.put('/api/v1/jobs/:id', passport.authenticate('jwt'), jobsController.updateJob);
    app.put('/api/v1/jobs/:id/finish', passport.authenticate('jwt'), jobsController.finishJob);
    app.post('/api/v1/jobs', passport.authenticate('jwt'), jobsController.createJob);
    app.delete('/api/v1/jobs/:id', passport.authenticate('jwt'), jobsController.cancelJob);
};