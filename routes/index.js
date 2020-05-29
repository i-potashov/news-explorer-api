const router = require('express').Router();
const authorization = require('./authorization');
const users = require('./users');
const articles = require('./articles');
const auth = require('../middlewares/auth');
const { NOT_FOUND } = require('../configuration/constants');
const NotFoundError = require('../errors/NotFoundError');

router.use(authorization);
router.use('/users', users);
router.use('/articles', auth, articles);
router.use('/*', () => { throw new NotFoundError(NOT_FOUND); });
module.exports = router;
