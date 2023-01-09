module.exports = app => {
    const Versions = app.models.versions;

    app.get('/versions', (req, res) => {
        Versions.findAll({}, (versions) => {
            res.json({ versions });
        });
    });

};