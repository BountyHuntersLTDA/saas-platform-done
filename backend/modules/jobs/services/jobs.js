'use strict';

const JobSchema = require('../models/Job');

/**
 * Create a new Job
 * @param {*} params 
 */
module.exports.createJob = params => JobSchema(params).save();

/**
 * List jobs 
 * @param {*} user 
 */
module.exports.listJobs = user => JobSchema.find({ user: user }).populate('client user', '_id name email');

/**
 * Detail jobs
 * @param {*} id 
 */
module.exports.findJobById = (id, user) => JobSchema.findOne({ _id: id, user: user }).populate('client user', '_id name email');

/**
 * Update job 
 * @param {*} id 
 * @param {*} params 
 */
module.exports.updateJobs = (id, params) => JobSchema.findOneAndUpdate(id, { $set: params }, { new: true });

/**
 * Delete Job
 * @param {*} id 
 * @param {*} user 
 */
module.exports.deleteJob = (id, user) => JobSchema.findOneAndRemove({ _id: id, user: user });