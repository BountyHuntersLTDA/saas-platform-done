'use strict';

const api = require('../libs/helpers/backend-api');

module.exports = app => {

    /**
     * Handler to Home
     */
    app.get('/', (req, res) => res.redirect('/home'));
    
    /**
     * Serve Signin page
     */
    app.get('/signin', (req, res) => {
        res.render('signin', { layout: 'sign' });
    });
    
    /**
     * Serve Signup page
     */
    app.get('/signup', (req, res) => {
        res.render('signup', { layout: 'sign' });
    });

    /**
     * Logout session
     */
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/signin');
    });


};
