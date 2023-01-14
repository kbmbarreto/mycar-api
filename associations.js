module.exports = (app) => {
    const Users = app.models.users;
    const Components = app.models.components;
    const Manufacturers = app.models.manufacturers;

    Users.hasMany(Components);
    Components.belongsTo(Users, {foreignKey: 'idUser'});

    Users.hasMany(Manufacturers);
    Manufacturers.belongsTo(Users, {foreignKey: 'idUser'});
};