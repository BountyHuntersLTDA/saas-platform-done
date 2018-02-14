'use strict';

const UsersController = require('../modules/users/controllers/users');
const UsersValidations = require('../modules/users/models/validations');

/**
 * User routes
 * @param {*} app 
 */
module.exports = app => {
    app.post('/api/v1/signup', UsersValidations.post, UsersController.signup);
    app.post('/api/v1/signin', UsersController.signin);
};