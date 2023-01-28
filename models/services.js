const {Model, DataTypes, Deferrable} = require('sequelize')
require('./workshops')
require('./vehicles')

module.exports = (app) => {

    const Workshops = app.models.workshops;
    const Vehicles = app.models.vehicles;

    const Services = app.db.define('Services', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        scheduling: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        amount: {
            type: DataTypes.DECIMAL(7.2),
            allowNull: true
        },
        orderService: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        idVehicle: {
            type: DataTypes.BIGINT,
            references: {
                model: Vehicles,
                key: 'id',
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        idWorkshop: {
            type: DataTypes.BIGINT,
            references: {
                model: Workshops,
                key: 'id',
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        }
    });
    return Services;
}