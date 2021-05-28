const router = require('express').Router();

const config = require('../../../config');
const connection = require('../../../database')(config.database);
const repository = require('../../../../src/event/infrastructure/mysqlRepository')(connection.con);
const createUseCase = require('../../../../src/event/application/create')(repository);
const controller = require('./controller')(createUseCase);

const {body} = require('../../../config/logger');

router.route('/')
    .post(body, controller.create)
    .get(body, controller.create);

module.exports = router;