module.exports = app => {
    const MaintenancesTypes = app.models.maintenancesTypes;

    app.get('/maintenancesTypes', (req, res) => {
        MaintenancesTypes.findAll({}, (maintenancesTypes) => {
            res.json({ maintenancesTypes });
        });
    });

};