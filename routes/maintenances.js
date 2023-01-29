module.exports = app => {

    const Maintenances = app.models.maintenances;
    const {db} = require("../config");

    app.route('/maintenancesFilter')
        .get(async (req, res) => {
            try {
                const result = await Maintenances.findAll({
                    raw: true,
                    attributes: this.attributes,
                    include: [{
                        model: db.manufacturer,
                        required: true,
                        attributes: ['manufacturer'],
                    }],
                    order: [['id', 'DESC']],
                }).then(Maintenances => console.table(Maintenances))
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })

    app.route('/maintenances')
        .get(async (req, res) => {
            try {
                const result = await Maintenances.findAll();
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .post(async (req, res) => {
            try {
                const result = await Maintenances.create(req.body);
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });

    app.route('/maintenances/:id')
        .get(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                const result = await Maintenances.findOne({where});
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
                await Maintenances.update(req.body, {where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .delete(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                await Maintenances.destroy({where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });
};