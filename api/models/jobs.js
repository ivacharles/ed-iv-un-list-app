const Sequelize= require('sequelize');

const database = require("../config/database");

const jobs = database.define('jobs',{
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
    type: Sequelize.STRING
}
})

module.exports = jobs;