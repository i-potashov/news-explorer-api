const jwt = require('jsonwebtoken');
const { USER_NOT_FOUND } = require('../configuration/constants');
const { JWT_KEY } = require('../configuration/config');
const LoginError = require('../errors/LoginError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log('authorization------->>>>>', authorization);
  if (!authorization || !authorization.startsWith('Bearer ')) {
    console.log('first ERR');
    throw new LoginError(USER_NOT_FOUND);
  }
  const token = authorization.replace('Bearer ', '');

  let payload;
  try {
    payload = jwt.verify(token, JWT_KEY);
  } catch (error) {
    console.log('second');
    throw new LoginError(USER_NOT_FOUND);
  }
  console.log('payload------->>>>>', payload);
  req.user = payload;

  return next();
};
