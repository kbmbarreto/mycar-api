module.exports = app => {
    const Manufacturers = app.models.manufacturers;

    app.route('/manufacturers')
        .get(async (req, res) => {
            try {
                const where = { userId: req.user.id }
                const result = await Manufacturers.findAll({ where });
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .post(async (req, res) => {
            try {
                req.body.userId = req.user.id
                const result = await Manufacturers.create(req.body);
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });

    app.route('/manufacturers/:id')
        .get(async (req, res) => {
            try {
                const {id} = req.params;
                const where = { id, userId: req.userId.id };
                const result = await Manufacturers.findOne({ where });
                if(result) {
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
                await Manufacturers.update(req.body, { where });
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .delete(async (req, res) => {
            try {
                const {id} = req.params;
                const where = { id, userId: req.user.id };
                await Manufacturers.destroy({ where });
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });
}