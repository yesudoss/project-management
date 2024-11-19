const Sequelize = require('sequelize');
const db = require('../../config/Database');

const BloodGroup = db.define('bloodgroup', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

module.exports = BloodGroup;