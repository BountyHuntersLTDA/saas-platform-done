'use strict';

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const express = require('express');
const path = require('path');
const Promise = require('bluebird');
const consign = require('consign');
const passport = require('passport');
const cors = require('cors');
const compression = require("compression");

const helpers = require('../libs/helpers/handlebars');
const sessionStore = require('./mongo-store');

module.exports = () => {

    const app = express();

    app.use(cors());
    app.use(morgan('dev'));
    app.use(compression());
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.engine('handlebars', exphbs({ defaultLayout: 'dashboard', helpers: helpers }));
    app.use(express.static(path.join(__dirname, '../static')));
    app.set('view engine', 'handlebars');

    //app.enable('view cache');

    app.use(session({
        store: sessionStore,
        secret: 'modafodaloca',
        proxy: false,
        resave: true,
        saveUninitialized: true
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    consign()
        .include('routes')
        .into(app);

    return app;
}