
const Sequelize= require('sequelize');

const database = require("../config/database");

const user = database.define('user',{
    userid:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name:{   
    type: Sequelize.STRING
},
first_name:{
    type: Sequelize.STRING
},
last_name:{
    type: Sequelize.STRING
},
password:{
    type: Sequelize.STRING
},
gender:{
    type: Sequelize.STRING
}
})
user.sync({alter : true});
module.exports = user;

