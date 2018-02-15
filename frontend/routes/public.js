'use strict';

module.exports = app => {

    app.get('/signin', (req, res) => {
        res.render('signin', { layout: 'sign' });
    });

    app.post('/signin', (req, res) => {});

    app.get('/signup', (req, res) => {
        res.render('signup', { layout: 'sign' });
    });

    app.post('/signup', (req, res) => {});

    app.get('/logout', (req, res) => {});


};