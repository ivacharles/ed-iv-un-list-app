const router = require('express').Router();
const { User } = require('../models');
const passport = require('../middlewares/authentication.js');

router.post('/signup', (req, res) => {
    console.log("POST body: ", req.body); // this needs to be deleted its just for testing.
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        contact_email: req.body.contact_email,
        password: req.body.password,
        // passwordHash: req.body.passwordHash,
        zip: req.body.zip,
        city: req.body.city
    })
    .then((user) => {
        console.log("\n\n   We did created the user!   \n\n");
        req.login(user, () => res.status(201).json(user));
    })
    .catch((err) =>{
        console.log("\n\n   We did not create the user!   \n\n");
        res.status(400).json({msg: 'Failed Sign Up', err});
    });
});
/*
passport.authenticate('local'), { successRedirect: '/',
                                failureRedirect: '/login',
                                failureFlash: true }
*/
router.post('/login',
    passport.authenticate('local'),
    (req, res) => {
    res.json(req.user)});

router.get('/login', (req, res) => {
    if(req.user){
        res.sendStatus(200);
        res.json(req.user)
    }
    else{
        res.sendStatus(401);
    }
})

router.post('/logout', (req, res) => {
    req.logout();
    res.status(200).json({message: "Logout Successful!"});
});

module.exports = router;