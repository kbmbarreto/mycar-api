module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { title: 'MyCar v.0.0.1', status: "Published", description: "Initial build" },
                { title: 'MyCar v.0.1.0', status: "Published", description: "Beta version" },
            ]);
        }
    };
};