const {Model, DataTypes, Deferrable} = require('sequelize')

require('./vehicles')
require('./components')

module.exports = (app) => {

    const Vehicles = app.models.vehicles;
    const Components = app.models.components;

    const ShoppingList = app.db.define('ShoppingList', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        notes: {
            type: DataTypes.STRING(256),
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        fulfilled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true
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
    return ShoppingList;
}