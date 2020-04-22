const router = require('express').Router();
const users = require('./users');
const articles = require('./articles');

router.use(users);
router.use(articles);
router.use('/*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
module.exports = router;
