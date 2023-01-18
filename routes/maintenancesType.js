module.exports = app => {
    const MaintenancesType = app.models.maintenancesType;

    app.get('/maintenancesType', (req, res) => {
        MaintenancesType.findAll({}, (maintenancesType) => {
            res.json({ maintenancesType });
        });
    });

};