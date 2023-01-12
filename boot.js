module.exports = app => {
    async function start(port) {
        try {
            await app.db.authenticate();
            await app.db.sync();
            app.listen(app.get('port'), () => {
                console.log(`MyCar API - port ${app.get('port')}`);
            });
        } catch (ex) {
            console.log('Database connection error!');
            console.error(ex);
        }
    }
    start(app.get('port'));
}