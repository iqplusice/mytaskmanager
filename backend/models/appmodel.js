const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Model {};
class Task extends Model {};

// initiating User Table
User.init({
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'TBL_USER',
    freezeTableName: true
});

// Initiating Task Table
Task.init({
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    duedate: {
        type: DataTypes.DATEONLY
    },
    userid: {
        type: DataTypes.INTEGER
    }
},{
    sequelize,
    modelName: 'TBL_TASK',
    freezeTableName: true
});

// Relationships
User.hasMany(Task, {
    onDelete: 'NO ACTION'
});
Task.belongsTo(User,{
    foreignKey: {
        allowNull: true
    }
})

module.exports = { User, Task};