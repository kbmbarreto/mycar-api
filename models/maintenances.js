const {Model, DataTypes, Deferrable} = require('sequelize')

require('./manufacturers')
require('./vehicles')
require('./components')

module.exports = (app) => {

    const Manufacturers = app.models.manufacturers;
    const Vehicles = app.models.vehicles;
    const Components = app.models.components;

    const Maintenances = app.db.define('Maintenances', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        km: {
            type: DataTypes.DECIMAL(7.3),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        maintenanceDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        nextKm: {
            type: DataTypes.DECIMAL(7.3),
            allowNull: true
        },
        amount: {
            type: DataTypes.DECIMAL(7.2),
            allowNull: true
        },
        maintenanceType: {
            type: DataTypes.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        idManufacturer: {
            type: DataTypes.BIGINT,
            references: {
                model: Manufacturers,
                key: 'id',
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        idVehicle: {
            type: DataTypes.BIGINT,
            references: {
                model: Vehicles,
                key: 'id',
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        idComponent: {
            type: DataTypes.BIGINT,
            references: {
                model: Components,
                key: 'id',
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        }
    });
    return Maintenances;
}