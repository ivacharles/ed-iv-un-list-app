const Sequelize= require('sequelize');
 const { Model } = require('sequelize');
const database = require("../config/database");
const user = require('./user');
const jobs = database.define('jobs',{
id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
userid:{
    type: Sequelize.INTEGER,
    refrences: 'user',
    referencesKey: 'userid'
},
title:{
    type: Sequelize.STRING
},
salary:{
    type: Sequelize.STRING
},
contact_email:{
    type: Sequelize.STRING
},
description:{
    type: Sequelize.STRING
},
name:{
    type: Sequelize.STRING,

}
})
user.hasMany(jobs);
jobs.sync({alter:true});
module.exports = jobs;