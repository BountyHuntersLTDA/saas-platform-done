'use strict';

const UserSchema = require('../models/User');

/**
 * Create a new User on Model
 * @param {*} params 
 */
module.exports.createUser = params => UserSchema(params).save();

/**
 * List all users
 * @param {*} params 
 */
module.exports.listUsers = () => UserSchema.find({}).select('_id name email');

/**
 * Detail user by email
 * @param {*} email 
 */
module.exports.findUserByEmail = email => UserSchema.findOne({ email: email }).select('_id name email password');