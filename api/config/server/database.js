const { Model } = require('sequelize');
const Sequelize = require('sequelize');
 module.exports = new Sequelize('craiglist_database', 'craig-user', 'edivun', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
