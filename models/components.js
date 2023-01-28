const {DataTypes} = require('sequelize');

module.exports = (app) => {
    const Components = app.db.define('Components', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        component: {
            type: DataTypes.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Components;
}