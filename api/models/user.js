
const Sequelize= require('sequelize');

const database = require("../config/database");

const user = database.define('user',{
user_name:{   
    type: Sequelize.STRING
},
first_name:{
    type: Sequelize.STRING
},
contact_email:{
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
user.sync({force: true});
module.exports = user;

