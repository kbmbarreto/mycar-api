const {DataTypes} = require('sequelize');

module.exports = (app) => {
    const Workshops = app.db.define('Workshops', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        workshop: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Workshops;
}