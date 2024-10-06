const { Sequelize } = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/data.sqlite'
});

module.exports = sequelize;