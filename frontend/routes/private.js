'use strict';

module.exports = app => {

    app.get('/home', (req, res) => {
        res.render('home', { layout: 'dashboard' });
    });

    app.get('/clients', (req, res) => {
        res.render('clients', { layout: 'dashboard' });
    });

    app.get('/clients/add', (req, res) => {
        res.render('createclients', { layout: 'dashboard' });
    });

    app.get('/clients/:id/edit', (req, res) => {
        res.render('createclients', { layout: 'dashboard' });
    });

    app.get('/clients/:id/delete', (req, res) => {
        res.render('createclients', { layout: 'dashboard' });
    });

    app.get('/jobs', (req, res) => {
        res.render('jobs', { layout: 'dashboard' });
    });

    app.get('/jobs/add', (req, res) => {
        res.render('createjobs', { layout: 'dashboard' });
    });

    app.get('/jobs/:id/edit', (req, res) => {
        res.render('jobs', { layout: 'dashboard' });
    });

    app.get('/jobs/:id/delete', (req, res) => {
        res.render('jobs', { layout: 'dashboard' });
    });


};