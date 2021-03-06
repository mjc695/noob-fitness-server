const db = require('../db');
const sequelize = require('sequelize');

const Exercise = db.define('exercise', {
  name: {
    type: sequelize.STRING,
  },
  type: {
    type: sequelize.STRING,
  },
  description: {
    type: sequelize.TEXT,
  },
});

module.exports = Exercise;
