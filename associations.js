module.exports = (app) => {
    const Users = app.models.users;
    const Components = app.models.components;
    const Manufacturers = app.models.manufacturers;
    const Workshops = app.models.workshops;

    Users.hasMany(Components);
    Components.belongsTo(Users, {foreignKey: 'idUser'});

    Users.hasMany(Manufacturers);
    Manufacturers.belongsTo(Users, {foreignKey: 'idUser'});

    Users.hasMany(Workshops);
    Workshops.belongsTo(Users, {foreignKey: 'idUser'});
};