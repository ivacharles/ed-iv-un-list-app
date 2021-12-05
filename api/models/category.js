'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {}

  Category.init({
    category: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      },
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'category',
    timestamps: false
  });

  Category.associate = (models) => {
    // associations can be defined here
  };

  return Category;
};