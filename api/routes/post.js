const express = require('express');
const router = require('express').Router(); 
const db = require('../config/database');
const user = require('../models/post');
// get a job list
router.get('/', (req,res) => 
post.findAll()
.then(post => {
    console.log (post);
    res.sendStatus(200);
   })
      .catch(err => console.log(err)));
// add a job
router.get('/add', (req,res)=>{
    const data = {
        
    }
    let {}  = data;
       post.create({

    })
    .then(post => res.redirect('/post'))
    .catch(err => console.log(err));
   
});
module.exports = router;