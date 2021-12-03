
const express = require('express');
const router = require('express').Router(); 
const db = require('../config/database');
const user = require('../models/user');
// get a job list
router.get('/', (req,res) => 
user.findAll()
.then(user => {
    console.log (user);
    res.sendStatus(200);
   })
      .catch(err => console.log(err)));
// add a job
router.get('/add', (req,res)=>{
    const data = {
        user_name: 'admin@12',
        first_name: 'una',
        last_name: 'Nami',
        contact_email: 'user3@gmail.com',
        password: 'passWord@1',
        gender: 'female'
    }
    let {user_name,first_name,last_name,contact_email,password,gender}  = data;
    user.create({
        user_name,
        first_name,
        last_name,
        contact_email,
        password,
        gender
    })
    .then(user => res.redirect('/user'))
    .catch(err => console.log(err));
   
});
module.exports = router;


// const express = require('express');
// const router = express.Router();
// const db = require('../config/database');
// const user = require('../models/user');
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
// // Get gig list
// router.get('/', (req, res) => 
//   user.findAll()
//     .then(user => res.render('user', {
//         user
//       }))
//     .catch(err => res.render('error', {error: err})));

// // Display add gig form
// router.get('/add', (req, res) => res.render('add'));

// // Add a gig
// router.post('/add', (req, res) => {
//   let {first_name,last_name,email,password,zip,city } = req.body;
//   let errors = [];
//   if(!first_name) {
//         errors.push({ text: 'Please add a firstname' });
//       }
//       if(!last_name) {
//         errors.push({ text: 'Please add a lastname' });
//       }
//       if(!password) {
//         errors.push({ text: 'Please add a password' });
//       }
//       if(!email) {
//         errors.push({ text: 'Please add an email address' });
//       }
//       if(!zip) {
//         errors.push({ text: 'Please add a zip' });
//       }
//       if(!city){
//         errors.push({ text: 'Please add a zip' });
//       }

//   // Check for errors
//   if(errors.length > 0) {
//     res.render('add', {
//       errors,
//       first_name,
//      last_name,
//      email,
//      password,
//      zip,
//      city
//     });
//   } else {
    
//     // Insert into table
//     user.create({
//       title,
//       technologies,
//       description,
//       budget,
//       contact_email
//     })
//       .then(user => res.redirect('/user'))
//       .catch(err => res.render('error', {error:err.message}))
//   }
// });

// module.exports = router;
















// const express = require('express');
// const router = require('express').Router(); 
// const db = require('../config/database');
// const user = require('../models/user');
// // get a job list
// router.get('/', (req,res) => 
// user.findAll()
// .then(user => {
//     console.log (user);
//     res.sendStatus(200);
//    })
//       .catch(err => console.log(err)));
// // add a job
// router.get('/add', (req,res)=>{
//     const data = {
//         user_name: 'admin@12',
//         first_name: 'una',
//         last_name: 'Nami',
//         contact_email: 'user3@gmail.com',
//         password: 'passWord@1',
//         gender: 'female'
//     }
//     let {user_name,first_name,last_name,contact_email,password,gender}  = data;
//     user.create({
//         user_name,
//         first_name,
//         last_name,
//         contact_email,
//         password,
//         gender
//     })
//     .then(user => res.redirect('/user'))
//     .catch(err => console.log(err));
   
// });
// module.exports = router;