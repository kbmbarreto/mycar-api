module.exports = app => {
    const Vehicles = app.models.vehicles;

    app.route('/vehicles')
        .get(async (req, res) => {
            try {
                const result = await Vehicles.findAll();
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .post(async (req, res) => {
            try {
                const result = await Vehicles.create(req.body);
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });

    app.route('/vehicles/:id')
        .get(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                const result = await Vehicles.findOne({where});
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
                const where = {id};
                await Vehicles.update(req.body, {where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .delete(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                await Vehicles.destroy({where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });
}