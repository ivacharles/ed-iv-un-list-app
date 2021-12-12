const router = require('express').Router();
const { User } = require('../models');
const passport = require('../middlewares/authentication');
// this is for user authentication and user sign up / login

router.post('/signup', (req, res) => {
  // console.log("POST body: ", req.body);
  User.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    contact_email: req.body.contact_email,
    passwordHash: req.body.password,
    zip: req.body.zip,
    city: req.body.city
  })
  .then((user) => {
    user.passwordHash = undefined;
    req.login(user, () => res.status(201).json(user));
  })
  .catch((err) => {
    res.status(400).json({ msg: 'Failed Signup', err });
  });
});

router.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log(req.user)
    res.json(req.user);
  });

router.get('/login', (req, res) => {
  if(req.user) {
    res.json(req.user)
  } else {
    res.sendStatus(401);
  }
});

router.post('/logout', (req, res) => {
  // await req.session.destroy()
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;