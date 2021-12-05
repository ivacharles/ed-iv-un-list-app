'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
<<<<<<< HEAD

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
=======
    content: {
>>>>>>> 8771af42d3193f9180fc3b8096dde86e5dabd066
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
<<<<<<< HEAD
  },
  description:{
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
  },

=======
    },
>>>>>>> 8771af42d3193f9180fc3b8096dde86e5dabd066
  }, {
    sequelize,
    modelName: 'post'
  });

  Post.associate = (models) => {
    // associations can be defined here
<<<<<<< HEAD
    // Post.belongsTo(models.user,{
    //   foreignKey:{
    //     name: 'userid'
    //   }
    // });
=======
>>>>>>> 8771af42d3193f9180fc3b8096dde86e5dabd066
  };

  return Post;
};