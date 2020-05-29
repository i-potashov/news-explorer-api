const router = require('express').Router();
const users = require('./users');
const articles = require('./articles');
const { NOT_FOUND } = require('../configuration/constants');
const NotFoundError = require('../errors/NotFoundError');

router.use(users);
router.use(articles);
router.use('/*', () => { throw new NotFoundError(NOT_FOUND); });
module.exports = router;
