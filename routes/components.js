module.exports = app => {
    const Components = app.models.components;

    app.get('/components', async (req, res) => {
        try {
            const components = await Components.findAll();
            res.json({components});
        }catch (ex) {
            res.status(500).json(ex);
        }
    });
};