// // 'use strict';
// // const {
// //   Model
// // } = require('sequelize');
// // module.exports = (sequelize, DataTypes) => {
// //   class Users extends Model {
// //     /**
// //      * Helper method for defining associations.
// //      * This method is not a part of Sequelize lifecycle.
// //      * The `models/index` file will call this method automatically.
// //      */
// //     // static associate(models) {
// //     //   // define association here
// //     // }
// //   }
// //   Users.init({
// //     id: {
// //       allowNull: false,
// //       autoIncrement: true,
// //       primaryKey: true,
// //       type: DataTypes.INTEGER,
// //     },
// //     firstName: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //     },
// //     lastName: {
// //       type: DataTypes.STRING,
// //     },
// //     email: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //       unique: true,
// //     },
    
// //     password: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //     },
// //     role: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //     },
// //   }, {
// //     sequelize,
// //     modelName: 'Users',
// //   });
// //   return Users;
// // };



const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Users = sequelize.define('Users', {
  
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'firstname',
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'lastname',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Users;


// models/user.js

// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const User = sequelize.define('User', {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   firstName: {
//     type: DataTypes.STRING,
//   },
//   lastName: {
//     type: DataTypes.STRING,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//   },
//   role: {
//     type: DataTypes.STRING,
//   },
//   createdAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   updatedAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
// }, {
//   tableName: 'Users', // Ensure the model matches the table name in your migration
// });

// module.exports = User;
