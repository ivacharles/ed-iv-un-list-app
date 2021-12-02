const Sequelize= require('sequelize');
 const { Model } = require('sequelize');
const database = require("../config/database");
const user = require('./user');
const category = require('./category');
const post = database.define('post',{
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
city:{
  type: Sequelize.STRING
},
img:{
  type: Sequelize.STRING
},
zipcode:{
  type: Sequelize.INTEGER
},
category:{
  type: Sequelize.STRING,
  references: 'category',
  referencesKey: 'id'
},
price:{
  type: Sequelize.STRING
},
make:{
  type: Sequelize.STRING
}
,modelname:{
  type: Sequelize.STRING
},
contact_email:{
    type: Sequelize.STRING
},
description:{
    type: Sequelize.STRING
}
})
user.hasMany(post);
post.hasMany();
post.sync({alter:true});
module.exports = post;