const Sequelize= require('sequelize');
 const { Model } = require('sequelize');
const database = require("../config/database");
const category = database.define('category',{
category:{
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull:false
}
})
category.sync({alter:true});
module.exports = category;