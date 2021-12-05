'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({

    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userid:{
      type: DataTypes.INTEGER
    //   references: {
    //     model: "user",
    //     key: "userid"
    // }
  },
  title:{
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
  },
  city:{
    type: DataTypes.STRING
  },
  img:{
    type: DataTypes.STRING
  },
  zipcode:{
    type: DataTypes.INTEGER,
 
  },
  category:{           
    type: DataTypes.STRING,
    validate: {
      len: [3, 250],
      notEmpty: true,
    }
  //   },
  //   references: {
  //     model: "category",
  //     key: "id"
  // }
  },
  price:{
    type: DataTypes.DOUBLE
  },                            
  make:{
    type: DataTypes.STRING
  }
  ,modelname:{
    type: DataTypes.STRING
  },
  contact_email:{
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
  },
  description:{
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
  },

  }, {
    sequelize,
    modelName: 'post'
  });

  Post.associate = (models) => {
    // associations can be defined here
    // Post.belongsTo(models.user,{
    //   foreignKey:{
    //     name: 'userid'
    //   }
    // });
  };

  return Post;
};