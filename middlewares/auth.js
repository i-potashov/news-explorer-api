const jwt = require('jsonwebtoken');
const { INVALID_AUTHORIZATION } = require('../configuration/constants');
const { JWT_KEY } = require('../configuration/config');
const LoginError = require('../errors/LoginError');

module.exports = (req, res, next) => {
  const { jwt: token } = req.cookies;
  if (!token) {
    throw new LoginError(INVALID_AUTHORIZATION);
  }
  let payload;
  try {
    payload = jwt.verify(token, JWT_KEY);
  } catch (err) {
    throw new LoginError(INVALID_AUTHORIZATION);
  }

  req.user = payload;

  return next();
};
