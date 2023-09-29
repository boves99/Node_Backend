const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const Keys = require('./keys');


module.exports = passport => {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = Keys.secretOrKey;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.iduser, (err, user) => {
            // Handle errors
            if (err) {
                return done(err, false);
            }
            // Handle user not found
            if (!user) {
                return done(null, false);
            }
            // Handle successful authentication
            return done(null, user);
        });
    }))};
