'use strict';

const JobSchema = require('../models/Jobs');

/**
 * 
 * @param {*} params 
 */
module.exports.createJob = params => JobSchema(params).save();

/**
 * 
 */
module.exports.listJobs = () => JobSchema.find({});

/**
 * 
 * @param {*} id 
 */
module.exports.findJobById = id => JobSchema.findOne({ _id: id });