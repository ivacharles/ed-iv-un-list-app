
const Sequelize= require('sequelize');

const database = require("../config/database");

const user = database.define('user',{
    userid:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

first_name:{
    type: Sequelize.STRING,
    allowNull:false
},
last_name:{
    type: Sequelize.STRING
},
email:{
    type: Sequelize.STRING
},
password:{
    type: Sequelize.STRING,
    allowNull:false
},
zip:{
    type: Sequelize.INTEGER,
    allowNull:false
},
city:{
    type: Sequelize.STRING,
    allowNull:false
}
})
// user.hasMany(post, {
//     as: 'post',
//     foreignKey: 'userid',
//     sourceKey: 'userid'
// });
user.sync();
module.exports = user;

