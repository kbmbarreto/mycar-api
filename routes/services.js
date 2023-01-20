module.exports = app => {
    const Services = app.models.services;

    app.route('/services')
        .get(async (req, res) => {
            try {
                const result = await Services.findAll();
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .post(async (req, res) => {
            try {
                const result = await Services.create(req.body);
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });

    app.route('/services/:id')
        .get(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                const result = await Services.findOne({where});
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
                await Services.update(req.body, {where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .delete(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                await Services.destroy({where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });
};