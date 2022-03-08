const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/users');
let googleClientID =  "google_client_id"
let googleClientSecret =  "your_secret"

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: googleClientID,
        clientSecret: googleClientSecret,
        callbackURL: '/auth/google/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ email: profile.emails[0].value }, async (err, user) => {
          if (err) {
            return done(err);
          }
          if (!user) {
            const newUser = new User({
              googleId: profile.id,
              email: profile.emails[0].value,
              name: profile.displayName,
            });
            await newUser.save();
            return done(null, newUser);
          }
          return done(null, user);
        });
      }
    )
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
