
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}
  
   User.init({
        userid:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    
    first_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    zip:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    city:{
        type: DataTypes.STRING,
        allowNull:false
    },
  
    }, {
      sequelize,
      modelName: 'user'
    });
  
   User.associate = (models) => {
      // associations can be defined here
    //   User.hasMany(models.post,{foreignKey : 'userid'});
    };
  
    return User;
  };