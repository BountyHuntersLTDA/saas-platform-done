'use strict';

const auth = require('../middlewares/auth');

module.exports = app => {

    app.get('/home', auth.isLoggedIn, (req, res) => {
        res.render('home', { layout: 'dashboard' });
    });

    app.get('/clients', auth.isLoggedIn, (req, res) => {
        res.render('clients', { layout: 'dashboard' });
    });

    app.get('/clients/add', auth.isLoggedIn, (req, res) => {
        res.render('createclients', { layout: 'dashboard' });
    });

    app.get('/clients/:id/edit', auth.isLoggedIn, (req, res) => {
        res.render('createclients', { layout: 'dashboard' });
    });

    app.get('/clients/:id/delete', auth.isLoggedIn, (req, res) => {
        res.render('createclients', { layout: 'dashboard' });
    });

    app.get('/jobs', auth.isLoggedIn, (req, res) => {
        res.render('jobs', { layout: 'dashboard' });
    });

    app.get('/jobs/add', auth.isLoggedIn, (req, res) => {
        res.render('createjobs', { layout: 'dashboard' });
    });

    app.get('/jobs/:id/edit', auth.isLoggedIn, (req, res) => {
        res.render('jobs', { layout: 'dashboard' });
    });

    app.get('/jobs/:id/delete', auth.isLoggedIn, (req, res) => {
        res.render('jobs', { layout: 'dashboard' });
    });


};