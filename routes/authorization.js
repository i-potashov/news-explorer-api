const authorization = require('express').Router();
const { login, createUser } = require('../controllers/users');
const { userLoginCheck, userCreateCheck } = require('../modules/validations');

authorization.post('/signin', userLoginCheck, login);
authorization.post('/signup', userCreateCheck, createUser);

module.exports = authorization;
