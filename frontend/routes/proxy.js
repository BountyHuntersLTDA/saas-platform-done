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

};