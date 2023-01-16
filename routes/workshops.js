module.exports = app => {
    const Workshops = app.models.workshops;

    app.route('/workshops')
        .get(async (req, res) => {
            try {
                const result = await Workshops.findAll();
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .post(async (req, res) => {
            try {
                const result = await Workshops.create(req.body);
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });

    app.route('/workshops/:id')
        .get(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                const result = await Workshops.findOne({where});
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
                const where = {id};
                await Workshops.update(req.body, {where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .delete(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                await Workshops.destroy({where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });
}