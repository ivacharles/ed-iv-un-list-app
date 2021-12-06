'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
class User extends Model {}
   User.init({
    userid:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type: DataTypes.STRING
    },
    contact_email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate:   {
            isEmail: true,
        },
    },
    password:{ type: DataTypes.STRING},
    // passwordHash:{
    //     type: DataTypes.VIRTUAL,
    //     allowNull: false,
    //     validate: {
    //         isLongEnough: (val) => {
    //             if(val.length < 7){
    //                 throw new Error("Please choose a longer password.");
    //             }
    //         }
    //     }
    // },
    zip:{
        type: DataTypes.INTEGER,
        validate: {
            isLongEnough: (val) =>{
                var t = val.toString();
                if(t.length < 5){
                    throw new Error("Input a valid 5 digit zip code.");
                }
            }
        },
        allowNull:false
    },
    city:{
        type: DataTypes.STRING,
        allowNull:false
    },
  
    }, {
      sequelize,
      modelName: 'user'
    })
//    User.associate = (models) => {
//       // associations can be defined here
//     //   User.hasMany(models.post,{foreignKey : 'userid'});
//     };
    // User.beforeSave((user, options) =>{
    //     if(user.passwordHash){
    //         user.password = bcrypt.hashSync(user.passwordHash, 10);
    //     }
    // });
    return User;
  };