module.exports = app => {
    const Components = app.models.components;

    app.route('/components')
        .all(app.auth.authenticate())
        .get(async (req, res) => {
            try {
                const where = { userId: req.user.id };
                const result = await Components.findAll({ where });
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .post(async (req, res) => {
            try {
                req.body.userId = req.user.id;
                const result = await Components.create(req.body);
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });

    app.route('/components/:id')
        .all(app.auth.authenticate())
        .get(async (req, res) => {
            try {
                const {id} = req.params;
                const where = { id, userId: req.user.id };
                const result = await Components.findOne({ where });
                if (result) {
                    res.json(result);
                } else {
                    res.sendStatus(404);
                }
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .put(async (req, res) => {
            try {
                const {id} = req.params;
                const where = { id, userId: req.user.id };
                await Components.update(req.body, {where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .delete(async (req, res) => {
            try {
                const {id} = req.params;
                const where = { id, userId: req.user.id };
                await Components.destroy({where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });
};