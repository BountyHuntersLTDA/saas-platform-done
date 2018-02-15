'use strict';

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

let mongoaddr;

const mongo_hostname = process.env.SESSION_HOST || 'frontend-session';
const mongo_port = process.env.SESSION_PORT || '27017';
const mongo_database = process.env.SESSION_DATABASE || 'backend-db';
const mongo_user = process.env.SESSION_USER;
const mongo_password = process.env.SESSION_PASSWORD;

if (mongo_user) {
    mongoaddr = `mongodb://${mongo_user}:${mongo_password}@${mongo_hostname}:${mongo_port}/${mongo_database}`;
} else {
    mongoaddr = `mongodb://${mongo_hostname}:${mongo_port}/${mongo_database}`;
}

module.exports = new MongoStore({ url: mongoaddr });