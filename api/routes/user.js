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