'use strict';

const auth = require('../middlewares/auth');
const api = require('../libs/helpers/backend-api');

module.exports = app => {

    /**
     * Signin Proxy to API
     */
    app.post('/signin', (req, res) => {

        const data = req.body;

        api.signin(data)
        .then(response => {
            req.session.user = response.data;
            res.redirect('/home');
        })
        .catch(err => {
            console.log(err);
            res.redirect('/signin');
        });

    });

    /**
     * Signup proxy API
     */
    app.post('/signup', (req, res) => {

        const data = req.body;

        api.signup(data)
        .then(response => {
            console.log(response.data);
            req.session.user = response.data;
            res.redirect('/signin');
        })
        .catch(err => {
            console.log(err.response);
            res.redirect('/signup');
        });

    });

    /**
     * Create client on Proxy API
     */
    app.post('/clients/add', (req, res) => {

        const data = req.body;
        console.log(data);

        api.createClient(data, req.session.user.token)
            .then(success => {
                console.log(success.data);
                res.redirect('/clients');
            })
            .catch(err => {
                console.log(err.response.data);
                res.redirect('/clients')
            })

    })

    app.post('/clients/:id/edit', (req, res) => {

        const id = req.params.id;
        const data = req.body;

        console.log(data);

        api.editClient(data, req.session.user.token)
            .then(success => {
                console.log(success);
                res.redirect(`/clients/${id}/edit`);
            })
            .catch(err => {
                console.log(err);
                res.redirect(`/clients/${id}/edit`);
            });

    });

    app.get('/clients/:id/delete', (req, res) => {

        const id = req.params.id;
        
        api.deleteClient(id, req.session.user.token)
            .then(success => {
                res.redirect('/clients')
            })
            .catch(err => {
                res.redirect('/clients');
            });

    });

    app.post('/jobs/add', (req, res) => {

        const data = req.body;
        console.log(data);

        api.createJob(data, req.session.user.token)
            .then(success => {
                console.log(success.data);
                res.redirect('/jobs');
            })
            .catch(err => {
                console.log(err.response.data);
                res.redirect('/jobs')
            })
    });

    app.get('/jobs/:id/delete', (req, res) => {

        const id = req.params.id;
        
        api.deleteJob(id, req.session.user.token)
            .then(success => {
                res.redirect('/jobs')
            })
            .catch(err => {
                res.redirect('/jobs');
            });

    });

    app.post('/jobs/:id/edit', (req, res) => {

        const id = req.params.id;
        const data = req.body;


        api.editJob(data, req.session.user.token)
            .then(success => {
                console.log(success);
                res.redirect(`/jobs/${id}/edit`);
            })
            .catch(err => {
                console.log(err);
                res.redirect(`/jobs/${id}/edit`);
            });

    });

};