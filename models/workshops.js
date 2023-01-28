const {DataTypes} = require('sequelize');

module.exports = (app) => {
    const Workshops = app.db.define('Workshops', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        workshop: {
            type: DataTypes.STRING(64),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        notes: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    });
    return Workshops;
}