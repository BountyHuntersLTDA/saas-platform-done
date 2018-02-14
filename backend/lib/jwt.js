const jwt = require('jwt-simple');

const SECRET = process.env.JWT_SECRET || 'doutorequemtemdoutorado';

module.exports.encode = payload => jwt.encode(payload, SECRET);
module.exports.decode = token => jwt.decode(token, SECRET);