const jwt = require('jsonwebtoken');
const { USER_NOT_FOUND } = require('../configuration/constants');
const { JWT_KEY } = require('../configuration/config');
const LoginError = require('../errors/LoginError');

module.exports = (req, res, next) => {
  const { jwt: token } = req.cookies;
  if (!token) {
    throw new LoginError(USER_NOT_FOUND);
  }
  let payload;
  try {
    payload = jwt.verify(token, JWT_KEY);
  } catch (err) {
    throw new LoginError(USER_NOT_FOUND);
  }

  req.user = payload;

  return next();
};
