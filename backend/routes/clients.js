'use strict';
const passport = require('../config/passport');
const clientsController = require('../modules/clients/controllers/clients');

/**
 * Clients API's
 * @param {*} app 
 */
module.exports = app => {
    app.get('/api/v1/clients', passport.authenticate('jwt'), clientsController.paginateClients);
    app.get('/api/v1/clients/:id', passport.authenticate('jwt'), clientsController.detailClient);
    app.post('/api/v1/clients', passport.authenticate('jwt'), clientsController.createClient);
    app.put('/api/v1/clients/:id', passport.authenticate('jwt'), clientsController.updateClient);
    app.delete('/api/v1/clients/:id', passport.authenticate('jwt'), clientsController.deleteClient);

    //Jobs
    app.post('/api/v1/clients/:id/jobs', passport.authenticate('jwt'), clientsController.createClient);
};