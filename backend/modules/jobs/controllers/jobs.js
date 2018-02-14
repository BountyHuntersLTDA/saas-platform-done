'use strict';

const clientsService    = require('../services/clients');
const jwt               = require('../../../lib/jwt');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createJob = (req, res) => {

    // GET User id from JWT Token
    const user = jwt.decode(req.headers.authorization);
    const params = req.body;
    params.user = user._id;

    if (params.user === undefined) {
        res.status(401).json({error: "Invalid user"});
    }

};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.listJobs = (req, res) => {

    // GET User id from JWT Token
    const user = jwt.decode(req.headers.authorization);
    const params = req.body;
    params.user = user._id;

    if (params.user === undefined) {
        res.status(401).json({error: "Invalid user"});
    }
    
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
        res.status(401).json({error: "Invalid user"});
    }
    
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.cancelJob = (req, res) => {

    // GET User id from JWT Token
    const user = jwt.decode(req.headers.authorization);
    const params = req.body;
    params.user = user._id;

    if (params.user === undefined) {
        res.status(401).json({error: "Invalid user"});
    }
    
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

    if (params.user === undefined) {
        res.status(401).json({error: "Invalid user"});
    }
    
};