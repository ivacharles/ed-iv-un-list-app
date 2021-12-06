// const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {User} = require('../models');

function passwordsMatch(submittedPassword, storedPasswordHash){
    console.log("made it this far!");
    if(submittedPassword == storedPasswordHash){
        return true;
    }
    return false;
    // return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}

passport.use(new LocalStrategy({
    contact_email: 'email',
    password: 'password',
},
(email, password, done) => {
    User.findOne({ where: { contact_email: {email} } })
    .then((user) => {
        if(!user) {
            console.log("\n\n\n User not found!\n\n\n")
            return done(null, false, { message: "Log in Failed"})
        }
        else{
             var tP = user.password;
             if(password === tP){
                console.log(password + " " + tP);
                return done(null, user, { message: "Successfully Logged In" });
             }
        }
        console.log()
        return done(null, false, { message: "Successfully NOT Logged In" })
    })
    .catch(error =>{return done(error)});
}));

passport.serializeUser((user, done) => {
    console.log("serializing user")
    console.log(user);
    done(null, user.id);
})
passport.deserializeUser((contact_email, done) => {
    User.findByPk(contact_email)
    .then((user) =>{
        if(!user){
            done(null, false);
            return;
        }
        done(null, user);
        return;
    })
    .catch(err => done(err, null));
});

// passport.isAuthenticated  = () =>
//     (req, res, next) =>
//         (req.user ? next(): res.sendStatus(401));
module.exports = passport;