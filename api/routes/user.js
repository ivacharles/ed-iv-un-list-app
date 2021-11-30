const express = require('express');
const router = require('express').Router(); 
const db = require('../config/database');
const user = require('../models/user');
// get a job list
router.get('/', (req,res) => 
user.findAll()
.then(user => {
    console.log (user);
    res.sendStatus(200)})
    .catch(err => console.log(err)));
// add a job
router.get('/add', (req,res)=>{
    const data = {
        user_name: 'admin12',
        first_name: 'unaiza',
        contact_email: 'user2@gmail.com',
        last_name: 'Nizami',
        password: 'passWord@1',
        gender: 'female'
    }
    let {user_name,first_name,contact_email,last_name,password,gender}  = data;
    user.create({
        user_name,
        first_name,
        contact_email,
        last_name,
        password,
        gender
    })
    .then(gig => res.redirect('/user'))
    .catch(err => console.log(err));
});
module.exports = router;