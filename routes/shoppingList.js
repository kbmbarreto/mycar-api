module.exports = app => {
    const ShoppingList = app.models.shoppingList;

    app.route('/shoppingList')
        .get(async (req, res) => {
            try {
                const where = { userId: req.user.id };
                const result = await ShoppingList.findAll({ where });
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .post(async (req, res) => {
            try {
                req.body.userId = req.user.id;
                const result = await ShoppingList.create(req.body);
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });

    app.route('/shoppingList/:id')
        .get(async (req, res) => {
            try {
                const {id} = req.params;
                const where = { id, userId: req.user.id };
                const result = await ShoppingList.findOne({ where });
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
                await ShoppingList.update(req.body, { where });
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .delete(async (req, res) => {
            try {
                const {id} = req.params;
                const where = { id, userId: req.user.id };
                await ShoppingList.destroy({ where });
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });
};