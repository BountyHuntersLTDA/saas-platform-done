'use strict';

const jobsService = require('../services/jobs');
const clientsService = require('../../clients/services/clients');

const jwt = require('../../../lib/jwt');

/**
 * Create a job for a client
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createJob = (req, res) => {

    // GET User id from JWT Token
    const user = jwt.decode(req.headers.authorization);
    const params = req.body;

    params.user = user._id;

    if (params.user === undefined) {
        res.status(401).json({ error: "Invalid user" });
    }

    clientsService.findClientById(params.client, user._id)
        .then(client => {
            if (client === null) throw "Not found";

            jobsService.createJob(params)
                .then(job => {

                    jobsService.findJobById(job._id)
                        .then(populated => {
                            res.status(201).json(populated);
                        });

                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json(err);
                });

        })
        .catch(err => res.status(404).json({ message: `Client not found` }));



};

/**
 * Update a job
 * @param {*} req 
 * @param {*} res 
 */
module.exports.updateJob = (req, res) => {

    const user = jwt.decode(req.headers.authorization);
    const params = req.body;
    params.user = user._id;

    const id = req.params.id;

    if (params.user === undefined) {
        res.status(401).json({ error: "Invalid user" });
    }

    jobsService.findJobById(id, params.user)
        .then(job => {

            if (job === null) {
                res.status(404).json({ message: `Job not found` });
            } else {

                jobsService
                    .updateJobs(id, params)
                    .then(success => res.status(200).json(success))
                    .catch(err => {
                        console.log(err);
                        res.status(400).json(err);
                    });

            }

        }).catch(err => res.status(404).json({ message: `Job not found` }));

}

/**
 * List existent jobs 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.listJobs = (req, res) => {

    // GET User id from JWT Token
    const user = jwt.decode(req.headers.authorization);
    const params = req.body;
    params.user = user._id;

    if (params.user === undefined) {
        res.status(401).json({ error: "Invalid user" });
    }

    jobsService.listJobs(params.user)
        .then(jobs => res.status(200).json(jobs))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.detailJob = (req, res) => {

    // GET User id from JWT Token
    const user = jwt.decode(req.headers.authorization);
    const params = req.body;
    params.user = user._id;

    if (params.user === undefined) {
        res.status(401).json({ error: "Invalid user" });
    }

};

/**
 * Cancel a existent job
 * @param {*} req 
 * @param {*} res 
 */
module.exports.cancelJob = (req, res) => {

    // GET User id from JWT Token
    const user = jwt.decode(req.headers.authorization);
    const params = req.body;
    params.user = user._id;

    const id = req.params.id;

    if (params.user === undefined) {
        res.status(401).json({ error: "Invalid user" });
    }

    jobsService.findJobById(id, params.user)
        .then(job => {

            if (job === null) {
                res.status(404).json({ message: `Job not found` });
            } else {

                jobsService.deleteJob(id, params.user)
                    .then(success => res.status(204).json({}))
                    .catch(err => {
                        console.log(err);
                        res.status(500).json(err);
                    });

            }

        }).catch(err => res.status(404).json({ message: `Job not found` }));

};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.finishJob = (req, res) => {

    // GET User id from JWT Token
    const user = jwt.decode(req.headers.authorization);
    const params = req.body;
    params.user = user._id;

    const id = req.params.id;

    if (params.user === undefined) {
        res.status(401).json({ error: "Invalid user" });
    }

    jobsService.findJobById(id, params.user)
        .then(job => {

            if (job === null) {
                res.status(404).json({ message: `Job not found` });
            } else {

                const valuesToUpdate = { finished: true }

                jobsService
                    .updateJobs(id, valuesToUpdate)
                    .then(success => res.status(200).json(success))
                    .catch(err => {
                        console.log(err);
                        res.status(500).json(err);
                    });

            }

        }).catch(err => res.status(404).json({ message: `Job not found` }));

};