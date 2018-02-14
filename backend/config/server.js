'use strict';

const express       = require('express');
const consign       = require('consign');
const bodyParser    = require('body-parser');
const validator     = require('express-validator');
const morgan        = require('morgan');
// const passport      = require('./passport');
const helmet 	    = require('helmet');
const cors	        = require('cors');

module.exports = () => {

    const app = express();

    // app.use(passport.initialize());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(helmet()); 
    app.use(cors());
    app.use(validator());

    consign()
        .include('routes')
        .into(app);

    return app;
}
