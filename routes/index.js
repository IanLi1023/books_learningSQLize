const router = require('express').Router();
const apiRoutes = require('./api');

//  The purpose of this file is to prepend /api to every route
//declare in apiRoutes
// THis will prepend /api to every route declared in apiRoutes
router.use('/api', apiRoutes)

module.exports = router;