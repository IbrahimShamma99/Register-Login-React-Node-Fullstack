var router = require('express').Router();
var RouteNames = require("../constants/constants");

router.use(RouteNames.base, require('./api/login'));
router.use(RouteNames.base, require('./api/register'));

module.exports = router;