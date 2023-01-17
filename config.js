module.exports = {
    db: {
        host: 'localhost',
        port: '3306',
        database: 'mycar',
        username: 'root',
        password: 'Dev2020@',
        params: {
            dialect: 'mysql',
            define: {
                underscored: true
            }
        },
        timezone: '-03:00',
        define: {
            freezeTableName: true,
            timestamps: false,
            createdAt: true,
            updatedAt: true
        },
    }
};