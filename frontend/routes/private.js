'use strict';

const auth = require('../middlewares/auth');
const api = require('../libs/helpers/backend-api');

module.exports = app => {

    app.get('/home', auth.isLoggedIn, (req, res) => {
        const data = {};
        data.user = req.session.user;
        res.render('home', { layout: 'dashboard', data: data });
    });

    app.get('/clients', auth.isLoggedIn, (req, res) => {

        const data = {};
        data.user = req.session.user;

        api.listClients({}, req.session.user.token)
            .then(clients => {
                data.clients = clients.docs;
                res.render('clients-list', { layout: 'dashboard', data: data });
            })
            .catch(err => console.log(err));
    });

    app.get('/clients/add', auth.isLoggedIn, (req, res) => {
        const data = {};
        data.user = req.session.user;
        res.render('clients-create', { layout: 'dashboard', data: data });
    });

    app.get('/clients/:id/edit', auth.isLoggedIn, (req, res) => {

        const data = {};
        data.user = req.session.user;

        api.detailClient(req.params.id, req.session.user.token)
            .then(client => {
                data.client = client;
                res.render('clients-edit', { layout: 'dashboard', data: data });
            })
            .catch(err => console.log(err));

    });

    app.get('/jobs', auth.isLoggedIn, (req, res) => {

        const data = {};
        data.user = req.session.user;

        api.listJobs({}, req.session.user.token)
            .then(jobs => {
                data.jobs = jobs;
                res.render('jobs-list', { layout: 'dashboard', data: data });
            })
            .catch(err => console.log(err));

    });

    app.get('/jobs/add', auth.isLoggedIn, (req, res) => {

        const data = {};
        data.user = req.session.user;
        
        api.listClients({}, req.session.user.token)
            .then(clients => {
                data.clients = clients.docs;
                res.render('jobs-create', { layout: 'dashboard', data: data });
            })
            .catch(err => console.log(err));

    });

    app.get('/jobs/:id/edit', auth.isLoggedIn, (req, res) => {

        const data = {};
        data.user = req.session.user;

        const id = req.params.id;

        api.detailJob(id, req.session.user.token)
            .then(job => {

                data.job = job;

                api.listClients({}, req.session.user.token)
                    .then(clients => {
                        data.clients = clients.docs;
                        console.log(data);
                        res.render('jobs-edit', { layout: 'dashboard', data: data });
                    });
             
            });
    });


};