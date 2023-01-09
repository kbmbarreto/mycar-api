module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log(`MyCar API - port ${app.get('port')}`);
    });
}