'use strict';

const mongo = require('../../../config/mongo');
const pagination = require('mongoose-paginate');

const Schema = mongo.Schema;

const ClientSchema = mongo.Schema({
    name: { type: String, required: true, trim: true },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    email: { type: String, trim: true },
    obs: { type: String, trim: true },
    phone: { type: String, trim: true },
    updated_at: { type: Date, default: Date.now },
});

ClientSchema.plugin(pagination);
module.exports = mongo.model('Client', ClientSchema);