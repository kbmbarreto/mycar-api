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

/* EXAMPLE CONFIGURATION
{
  host: process.env.hostSqlServer,
  port: process.env.mssqlPort && Number(process.env.mssqlPort),
  username: process.env.hostUserName,
  password: process.env.hostPassword,
  dialect: 'mssql',
  operatorsAliases: Op,
  database: process.env.hostDataBase,
  dialectOptions: {
    useUTC: false,
    encrypt: true,
    options: {
      encrypt: true
    }
  },
  timezone: '-03:00',
  define: {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  },
  models: [__dirname + '/domain/models/'],
  logging: false
}
 */