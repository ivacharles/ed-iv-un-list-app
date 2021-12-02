const Sequelize= require('sequelize');
 const { Model } = require('sequelize');
const database = require("../config/database");
const user = require('./user');
const jobs = database.define('category',{
id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
category:{
    type: Sequelize.STRING,
}
})
post.hasMany(category);
category.sync({alter:true});
module.exports = category;