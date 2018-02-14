'use strict';

const passport      = require("passport");
const passportJWT   = require("passport-jwt");

const ExtractJwt    = passportJWT.ExtractJwt;
const Strategy      = passportJWT.Strategy;

const SECRET        = process.env.JWT_SECRET || 'doutorequemtemdoutorado';

const params = {
  secretOrKey: SECRET,
  jwtFromRequest: ExtractJwt.fromHeader('authorization')
};

const strategy = new Strategy(params, (payload, done) => {

    if (payload) {
        done(null, payload);
    } else {
        done(null, false, { message: 'invalid email or password' });
    }

});

passport.use(strategy);

module.exports.initialize   = () => passport.initialize();
module.exports.authenticate = () => passport.authenticate("jwt", {session: false});
