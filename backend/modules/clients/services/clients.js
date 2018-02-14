'use strict';

const ClientSchema = require('../models/Client');

/**
 * Register a new Client and parse tags
 * @param {*} params 
 */
module.exports.createNewClient = params => new ClientSchema(params).save();


/**
 * Find Client by id
 * @param {*} id 
 */
module.exports.findClientById = (id, user) => ClientSchema.findOne({_id: id, user: user}).populate('user', '_id name email');

/**
 * Update Client
 * @param {*} id 
 * @param {*} params 
 */
module.exports.updateClientById = (id, params) => ClientSchema.findByIdAndUpdate(id, {$set: params}, {new: true});

/**
 * Paginate Clients list
 * @param {*} query 
 * @param {*} options 
 */
module.exports.ClientsPagination = (query = {}, options = {}) => ClientSchema.paginate(query, options);

/**
 * Paginate Clients using redis cache
 * @param {*} query 
 * @param {*} options 
 */
module.exports.ClientsPaginationWithCache = (query, options) => {};

/**
 * Delete Client using id
 * @param {*} id 
 */
module.exports.deleteClientById = (id, user) => ClientSchema.findOneAndRemove({_id: id, user: user});

/**
 * Delete all Clients 
 * Use only in dev mode
 */
module.exports.cleanClients = () => ClientSchema.remove({});
