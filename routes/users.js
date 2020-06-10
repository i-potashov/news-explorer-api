const users = require('express').Router();
const { getUser } = require('../controllers/users');
const authorization = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const { userLoginCheck, userCreateCheck } = require('../modules/validations');

users.get('/users/me', authorization, getUser);
users.post('/signin', userLoginCheck, login);
users.post('/signup', userCreateCheck, createUser);

module.exports = users;
