const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');

function passwordsMatch(submittedPassword, storedPasswordHash) {
  return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}

/*
  The following code runs at login time.
  The usernameField and passwordField options refer to the HTTP requests
  body parameter names. I've set this to look for an `email` parameter,
  but you may prefer to use a `username` parameter instead of an email.
  BEST PRACTICE: don't state why login failed to the user.
*/
passport.use(
  new LocalStrategy({
    usernameField: 'contact_email',
    passwordField: 'password'
  },
  function(contact_email, password, done) {
    // console.log("email", contact_email, "password", password); // for testing purposes
    User.findOne({ where: {contact_email}})
    .then((user) => {
        // if there is not user
        if(!user){
            console.log('\n\n\\n\n\nFailed Login: User does not exist   \n\n\n\n');
            return done(null, false, {message: 'Failed Login'});
        }
        if(passwordsMatch(password, user.password) === false){
            console.log('\n\n\\n\n\n', password, user.password);
            return done(null, false, {message: 'Failed Login'});
        }
        console.log('\n\n\\n\n\n Successful Login   \n\n\n\n');
        return done(null, user, {message: 'Failed Login'});
    })
    .catch(error => {
        return done(error);
    });
  }
));

passport.serializeUser((user, done) => {
    done(null, user.contact_email);
});
  
passport.deserializeUser((contact_email, done) => {
  User.findOne({
    where:{
      contact_email
    }})
    .then((user) => {
      if (!user) {
        done(null, false);
        return;
      }
      done(null, user);
      return;
    })
    .catch(err => done(err, null));
});
  
passport.isAuthenticated = () => (req, res, next) => (req.user ? next() : res.sendStatus(401));
  
module.exports = passport;

  
// TEST CODE 
// console.log("LocalStrategy working...");
// return done(null, {
//   first_name: 'Joe',
//   last_name: 'Joe',
//   contact_email: "eee@gmail.com",
//   passwordHash: 'passwordtest',
//   zip: 12321,
//   city: "req.body.city"
// });
  // new LocalStrategy({
  //   usernameField: 'contact_email',
  //   passwordField: 'passwordHash',
  // },
  // (username, password, done) => {
  //   User.findOne({ contact_email: username }),
  //   function(err, user) {
  //     if (err) { return done(err);}
  //     if(passwordsMatch(password, user.password) === false) {
  //       console.log('\n\nFailed Login: passwords did not match\n\n');
  //       return done(null, false, { message: 'Failed Login' });
  //     }
  //     console.log('\n\n\\n\n\n Successful Login   \n\n\n\n');
  //     return done(null, user, {message: 'Log In Successful'});
  //   }
  //     .then((user) => {
  //       if(!user) {
  //         console.log('\n\n\\n\n\nFailed Login: User does not exist   \n\n\n\n');
  //         return done(null, false, {message: 'Failed Login'});
  //       }

  //       if(passwordsMatch(passwordHash, user.password) === false) {
  //         console.log('\n\nFailed Login: passwords did not match\n\n');
  //         return done(null, false, { message: 'Failed Login' });
  //       }
  //       console.log('\n\n\\n\n\n Successful Login   \n\n\n\n');
  //       return done(null, user, {message: 'Failed Login'});
  //     })
  //     .catch(err => { return done(err) });
//   })
// );

// passport.use(
//     new LocalStrategy({
//         usernameField: 'contact_email',
//         passwordField: "passwordHash"
//     },
//     function (contact_email, passwordHash, done) {
// ));