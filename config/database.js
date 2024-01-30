
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  // Your database configuration
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123456',
  database: 'LMS_DB',
});

module.exports = sequelize;