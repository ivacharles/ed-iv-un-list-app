const express = require('express');
const router = express.Router();
const db = require('../config/database');
const user = require('../models/category');
const Sequelize = require('sequelize');
//const Op = Sequelize.Op;
// Get gig list
router.get('/', (req, res) => 
category.findAll()
    .then(user => res.render('category', {
        category
      }))
    .catch(err => res.render('error', {error: err})));

// Display add category
router.get('/add', (req,res)=>{
    const data = {
       
        category: 'jobs'
    }
    let {category}  = data;
    category.create({
        category
  
    })
    .then(category => res.redirect('/category'))
    .catch(err => console.log(err));
});

module.exports = router;


