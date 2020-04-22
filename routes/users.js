const users = require('express').Router();
const { getUser } = require('../controllers/users');

users.get('/users/me', getUser);

module.exports = users;
