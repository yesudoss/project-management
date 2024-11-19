const Sequelize = require('sequelize');
const db = require('../../config/Database');

const Country = db.define('country', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

module.exports = Country;