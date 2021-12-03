const express = require('express');
const router = express.Router();
const db = require('../config/database');
const post = require('../models/post');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get gig list
router.get('/', (req, res) => 
 post.findAll()
    .then(gigs => res.render('post', {
        post
      }))
    .catch(err => res.render('error', {error: err})));

// Display add gig form
router.get('/add', (req, res) => res.render('add'));

// Add a gig
router.post('/add', (req, res) => {
  let { id,userid,title,city,img,category,zipcode, price,make,modelname,contact_email,description } = req.body;
  let errors = [];
  if(!userid) {
    errors.push({ text: 'Please add a firstname' });
  }
  if(!email) {
    errors.push({ text: 'Please add an email address' });
  }
  if(!zipcode) {
    errors.push({ text: 'Please add a zip' });
  }
  if(!city){
    errors.push({ text: 'Please add a zip' });
  }
  // Validate Fields
  if(!title) {
    errors.push({ text: 'Please add a title' });
  }

  if(!description) {
    errors.push({ text: 'Please add a description' });
  }
  if(!contact_email) {
    errors.push({ text: 'Please add a contact email' });
  }

  // Check for errors
  if(errors.length > 0) {
    res.render('add', {
      errors,
      id,userid,title,city,img,category,zipcode, price,make,modelname,contact_email,description
    });
  } else {
    

    // Insert into table
   post.create({
        id,
        userid,
        title,
        city,
        img,
        category,
        zipcode,
         price,
         make,
         modelname,
         contact_email,
         description
    })
      .then(post => res.redirect('/post'))
      .catch(err => res.render('error', {error:err.message}))
  }
});

// Search for gigs
// router.get('/search', (req, res) => {
//   let { term } = req.query;

//   // Make lowercase
//   term = term.toLowerCase();

//   Gig.findAll({ where: { technologies: { [Op.like]: '%' + term + '%' } } })
//     .then(gigs => res.render('gigs', { gigs }))
//     .catch(err => res.render('error', {error: err}));
// });

module.exports = router;