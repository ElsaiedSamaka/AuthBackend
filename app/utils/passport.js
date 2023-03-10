const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth2").Strategy;
const db = require("../models");
const User = db.user;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      const [user, status] = await User.findOrCreate({
        where: {
          googleId: profile.id,
          name: profile.displayName,
          username: profile.emails[0].value,
          email: profile.emails[0].value,
          source: "google",
        },
      });
      cb(null, user);
    }
  )
);
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, user);
  });
});
passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});
//  <a href="/auth/google" class="btn btn-danger">
//    <i class="fab fa-google left"></i> Log In With Google
//  </a>;
