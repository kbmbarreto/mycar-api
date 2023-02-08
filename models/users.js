const bcrypt = require('bcrypt')
const {DataTypes} = require('sequelize');

module.exports = (app) => {
    const Users = app.db.define('Users', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true
            },
            set(value) {
                const salt = bcrypt.genSaltSync();
                const password = bcrypt.hashSync(value, salt);
                this.setDataValue('password', password);
            }
        },
        email: {
            type: DataTypes.STRING(64),
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Users;
};