const router = require('express').Router();

const testing = require('./testing/routes');

router.use('/testing', testing);

module.exports = router;