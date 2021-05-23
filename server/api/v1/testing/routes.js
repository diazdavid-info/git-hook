const router = require('express').Router();
const controller = require('./controller');
const {body} = require('../../../config/logger')

router.route('/')
    .post(body, controller.create)
    .get(body, controller.create);

module.exports = router;