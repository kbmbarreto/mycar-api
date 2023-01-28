const {DataTypes} = require('sequelize');

module.exports = (app) => {
    const Vehicles = app.db.define('Vehicles', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        vehicle: {
            type: DataTypes.STRING(64),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Vehicles;
}