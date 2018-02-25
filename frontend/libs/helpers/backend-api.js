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

/**
 * Create new client on Backend API
 * @param {*} data 
 * @param {*} token 
 */
module.exports.createClient = (data, token) => {
    return axios({
        method: "POST", 
        url: `${API_URL}/clients`,
        headers: {
            "content-type" : "application/json",
            "Authorization": token
        },
        data: data
    });
};

/**
 * List clients on Backend 
 * @param {*} options 
 * @param {*} token 
 */
module.exports.listClients = (options = {}, token ) => {
    return axios({
        method: "GET", 
        url: `${API_URL}/clients`, 
        headers: {
            "content-type" : "application/json",
            "Authorization": token 
        }
    })
};

/**
 * Detail client via API
 * @param {*} id 
 * @param {*} token 
 */
module.exports.detailClient = (id, token) => {
    return axios({
        methor: "GET", 
        url: `${API_URL}/clients/${id}`, 
        headers: {
            "content-type" : "application/json",
            "Authorization": token 
        }
    }).then(success => success.data)
};

/**
 * Edit client via API
 * @param {*} data 
 * @param {*} token 
 */
module.exports.editClient = (data, token) => {
    return axios({
        method: "PUT", 
        url: `${API_URL}/clients/${data._id}`,
        headers: {
            "content-type" : "application/json",
            "Authorization": token
        },
        data: data
    }).then(success => success.data);
}

/**
 * Delete client via API
 * @param {*} id 
 * @param {*} token 
 */
module.exports.deleteCLient = (id, token) => {
    return axios({
        methor: "DELETE", 
        url: `${API_URL}/clients/${id}`, 
        headers: {
            "content-type" : "application/json",
            "Authorization": token 
        }
    });
};