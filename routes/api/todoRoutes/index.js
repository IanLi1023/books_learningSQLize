const router = require('express').Router();
const {
    Todo,
    User,
 } = require('../../../models');

// this will prepend /api/todos to every route in here

router.get('/', async (req, res) => {
	try {
		const todos = await Todo.findAll({
            // Will perform a join with the user table
            include: [ { model: User }],
        });
		res.json(todos);
	} catch (e) {
		res.json(e);
	}
});

module.exports = router;