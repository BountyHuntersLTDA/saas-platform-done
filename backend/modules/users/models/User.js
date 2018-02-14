'use strict';

const mongo = require('../../../config/mongo');
const hash = require('take-my-hash');

const SALT_WORK_FACTOR = 10;

const userSchema = mongo.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    enabled: { type: Boolean, required: true, default: true },
    tardis: { type: String, default: false }
});

userSchema.pre('save', function(next) {
    let user = this;
    if (!user.isModified('password')) return next();
    user.password = hash.sha256(user.password);
    next();
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    let user = this;
    let password = hash.sha256(candidatePassword);
    let isMatch = password === user.password;

    if (isMatch) {
        cb(null, isMatch);
    } else {
        cb('error', isMatch);
    }
};

module.exports = mongo.model('User', userSchema);