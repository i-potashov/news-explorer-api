const jwt = require('jsonwebtoken');
const { USER_NOT_FOUND } = require('../configuration/constants');
const { JWT_KEY } = require('../configuration/config');
const LoginError = require('../errors/LoginError');

module.exports = (req, res, next) => {
  const { Authorization } = req.headers;
  if (!Authorization || !Authorization.startsWith('Bearer ')) {
    throw new LoginError(USER_NOT_FOUND);
  }
  const token = Authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_KEY);
  } catch (err) {
    throw new LoginError(USER_NOT_FOUND);
  }
  req.user = payload;

  return next();
};
