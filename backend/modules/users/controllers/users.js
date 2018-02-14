'use strict';

const userService = require('../services/users');
const authService = require('../services/auth');

/**
 * Create a new user
 * @param {*} req 
 * @param {*} res 
 */
module.exports.signup = (req, res) => {
    userService.createUser(req.body)
        .then(newUser => res.status(201).json(newUser))
        .catch(err => res.status(400).json(err));
};


module.exports.signin = (req, res) => {

    if (!req.body.email || !req.body.password) {
        res.status(401).json({
            status: 401,
            message: "invalid username/password"
        });
    } 

    authService
        .authenticate(req.body.email, req.body.password)
        .then(token => res.status(200).json(token))
        .catch(err => {
            console.log(err);
            res.status(401).json({
                status: 401, 
                message: 'invalid username/password'
            });

        });

};