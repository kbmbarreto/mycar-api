const {Model, DataTypes, Deferrable} = require('sequelize')
require('./workshops')

module.exports = (app) => {

    const Workshops = app.models.workshops;

    console.log(app.models)
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
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        orderService: {
            type: DataTypes.STRING,
            allowNull: true
        },
        vehicle: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
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