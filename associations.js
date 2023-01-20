module.exports = (app) => {
    const Users = app.models.users;
    const Components = app.models.components;
    const Manufacturers = app.models.manufacturers;
    const Workshops = app.models.workshops;
    const Vehicles = app.models.vehicles;
    const Services = app.models.services;

    Users.hasMany(Components);
    Components.belongsTo(Users, {foreignKey: 'idUser'});

    Users.hasMany(Manufacturers);
    Manufacturers.belongsTo(Users, {foreignKey: 'idUser'});

    Users.hasMany(Workshops);
    Workshops.belongsTo(Users, {foreignKey: 'idUser'});

    Users.hasMany(Vehicles);
    Vehicles.belongsTo(Users, {foreignKey: 'idUser'});

    Users.hasMany(Services);
    Services.belongsTo(Users, {foreignKey: 'idUser'});

    Vehicles.hasMany(Services);
    Services.belongsTo(Vehicles, {foreignKey: 'idVehicle'});

    Workshops.hasMany(Services);
    Services.belongsTo(Workshops, {foreignKey: 'idWorkshop'});
};