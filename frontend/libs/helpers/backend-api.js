'use strict';

const axios = require('axios');

const API_URL = process.env.API_URL || 'http://backend-api:3000/api/v1';

/**
 * Login on Backend
 * @param {*} credentials 
 */
module.exports.signin = credentials => {
    return axios({
        method: "POST",
        url: `${API_URL}/signin`,
        headers: {
            "Content-type" : "application/json",
        },
        data: credentials
    });
};

/**
 * Create new Account
 * @param {*} credentials 
 */
module.exports.signup = data => {
    return axios({
        method: "POST",
        url: `${API_URL}/signup`,
        headers: {
            "Content-type" : "application/json",
        },
        data: data
    });
};

