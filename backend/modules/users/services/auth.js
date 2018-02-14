'use strict';

const Promise       = require('bluebird');
const userService   = require('./users');
const userSchema    = require('../models/User.js');
const jwt           = require('../../../lib/jwt');     

module.exports.authenticate = (email, password) => {

    console.log(password);

    return new Promise((resolve, reject) =>{

        userService
            .findUserByEmail(email)
            .then(user => {
                if (user === null) {
                    throw "invalid";
                }

                user.comparePassword(password, (err, match) => {

                    if (err) {
                        throw "invalid";
                    } else {

                        resolve({
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            token: jwt.encode({
                                _id: user._id,
                                name: user.name,
                                email: user.email
                            })
                        });
                    }

                });

            }).catch(err => reject(err));

    });

};