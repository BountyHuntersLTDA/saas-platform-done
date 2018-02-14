'use strict';

module.exports.post = (req, res, next) => {
    req.checkBody("email", "Invalid e-email").isEmail();
    req.checkBody("name", "Invalid name").isLength({ min: 2 });
    req.checkBody("password", "Invalid password").isLength({ min: 8 });
    next();
};