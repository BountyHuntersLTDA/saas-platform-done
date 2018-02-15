'use strict';

const mongo = require('../../../config/mongo');
const pagination = require('mongoose-paginate');
const Schema = mongo.Schema;

const JobSchema = mongo.Schema({
    description: { type: String, required: true, trim: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    client: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    time: { type: String, trim: true },
    value: { type: Number, default: 0 },
    obs: { type: String, trim: true },
    finished: { type: Boolean, default: false },
    updated_at: { type: Date, default: Date.now },
});

JobSchema.plugin(pagination);
module.exports = mongo.model('Job', JobSchema);