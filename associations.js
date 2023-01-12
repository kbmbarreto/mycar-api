module.exports = (app) => {
    const Users = app.models.users;
    const Components = app.models.components;

    Users.hasMany(Components);
    Components.belongsTo(Users, {foreignKey: 'idUser'});
};