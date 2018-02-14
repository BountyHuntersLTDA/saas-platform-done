'use strict';

const clientsService    = require('../services/clients');
const jwt               = require('../../../lib/jwt');

/**
 * Create a new Client 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createClient = (req, res) => {

    // GET User id from JWT Token
    const user = jwt.decode(req.headers.authorization);
    const params = req.body;
    params.user = user._id;

    if (params.user === undefined) {
        res.status(401).json({error: "Invalid user"});
    }

    clientsService
        .createNewClient(params)
        .then(success => res.status(201).json(success))
        .catch(err => res.status(400).json(err));

};

/**
 * Paginate clients action 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.paginateClients = (req, res) => {

    const page = req.query.page || 1;
    const limit = req.query.limit || 40;

    const options = {
        limit: limit,
        page: page
    };

    // GET User id from JWT Token
    const user = jwt.decode(req.headers.authorization);

    if (user._id === undefined) {
        res.status(401).json({error: "Invalid user"});
    }

    const query = {
        user: user._id
    };

    if (req.query.name) {
        query.name = new RegExp(`^${req.query.name}$`, "i");
    }
    
    if (req.query.email) {
        query.email = new RegExp(`^${req.query.email}$`, "i");
    }

    if (req.query.phone) {
        query.phone = new RegExp(`${req.query.phone}`, "i");
    }

    if (req.query.obs) {
        query.obs = new RegExp(`${req.query.obs}`, "i");
    }

    clientsService
        .ClientsPagination(query, options)
        .then(clients => res.status(200).json(clients))
        .catch(err => res.status(500).json(err));

};

/**
 * Detail user by id
 * @param {*} req 
 * @param {*} res 
 */
module.exports.detailClient = (req, res) => {

    const user = jwt.decode(req.headers.authorization);
    const id = req.params.id;

    if (user._id === undefined) {
        res.status(401).json({error: "Invalid user"});
    }

    clientsService.findClientById(id, user._id)
        .then(client => {
            if (client === null) throw "Not found";
            res.status(200).json(client);
        })
        .catch(err => res.status(404).json({message: `Client not found`}));

};

/**
 * Update a client
 * @param {*} req 
 * @param {*} res 
 */
module.exports.updateClient = (req, res) => {

    const user = jwt.decode(req.headers.authorization);
    const id = req.params.id;

    if (user._id === undefined) {
        res.status(401).json({error: "Invalid user"});
    }

    clientsService.findClientById(id, user._id)
    .then(client => {

        if (client === null) {
            res.status(404).json({message: `Client not found`});
        } else {
            clientsService
                .updateClientById(id, req.body)
                .then(success => res.status(200).json(success))
                .catch(err => res.status(400).json(err));
        }

    }).catch(err => res.status(404).json({message: `Client not found`}));
};

/**
 * Delete a client
 * @param {*} req 
 * @param {*} res 
 */
module.exports.deleteClient =  (req, res) => {

    const user = jwt.decode(req.headers.authorization);
    const id = req.params.id;

    if (user._id === undefined) {
        res.status(401).json({error: "Invalid user"});
    }

    // Verify if client exists
    clientsService.findClientById(id, user._id)
        .then(client => {

            if (client === null) {
                res.status(404).json({message: `Client not found`});
            } else {
                clientsService
                    .deleteClientById(id, user._id)
                    .then(success => res.status(204).json(success))
                    .catch(err => res.status(500).json(err));
            }

        }).catch(err => res.status(500).json(err));

};