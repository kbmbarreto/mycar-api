const {DataTypes} = require('sequelize')

module.exports = (app) => {
    const Manufacturers = app.db.define('Manufacturers', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        manufacturer: {
            type: DataTypes.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Manufacturers;
}