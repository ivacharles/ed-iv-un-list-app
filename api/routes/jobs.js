const express = require('express');
const router = require('express').Router(); 
const db = require('../config/database');
const jobs = require('../models/jobs');
// get a job list
router.get('/', (req,res) => 
jobs.findAll()
.then(jobs => {
    console.log (jobs);
    res.sendStatus(200)})
    .catch(err => console.log(err)));
// add a job
router.get('/add', (req,res)=>{
    const data = {
        title: 'accountant',
        name: 'accounting',
        salary: '$987',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model textncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        contact_email: 'user2@gmail.com'


    }
    let {title,name,salary,description,contact_email}  = data;
    jobs.create({
        title,
        name,
        salary,
        description,
        contact_email
    })
    .then(gig => res.redirect('/jobs'))
    .catch(err => console.log(err));
});
module.exports = router;