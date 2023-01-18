module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { maintenanceType: "Preventiva" },
                { maintenanceType: "Corretiva" },
                { maintenanceType: "Opcional" },
                { maintenanceType: "Recall" },
            ]);
        }
    };
};