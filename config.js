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
    },
    jwt: {
        secret: 'aaHHuubS546s45845%$¨¨GSFTs987878s46558448K"K"?:?:787&*)6%%¨¨434#hsvh784sa9(*(*1998@#',
        options: { session: false }
    }
};