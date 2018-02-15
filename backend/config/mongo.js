'use strict';

const mongo = require('mongoose');
mongo.Promise = require('bluebird');

let mongoaddr;

const mongo_hostname = process.env.MONGO_HOST || 'mongodb';
const mongo_port = process.env.MONGO_PORT || '27017';
const mongo_database = process.env.MONGO_DATABASE || 'bounty-hunters';
const mongo_user = process.env.MONGO_USER;
const mongo_password = process.env.MONGO_PASSWORD;

if (mongo_user) {
    mongoaddr = `mongodb://${mongo_user}:${mongo_password}@${mongo_hostname}:${mongo_port}/${mongo_database}`;
} else {
    mongoaddr = `mongodb://${mongo_hostname}:${mongo_port}/${mongo_database}`;
}

mongo.connect(mongoaddr);

module.exports = mongo;