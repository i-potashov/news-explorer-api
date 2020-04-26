const { SERVER_ERROR, INVALID_LINK, NOT_UNIQUE } = require('../configuration/constants');

const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  console.log('The centralized error handler was triggered');
  if (err.name === 'ValidationError') {
    if (err._message === 'user validation failed') {
      res.status(409).send({ message: NOT_UNIQUE });
    } else {
      res.status(400).send({ message: INVALID_LINK });
    }
  } else {
    res.status(statusCode).send({ message: statusCode === 500 ? SERVER_ERROR : message });
  }
  next();
};

module.exports = {
  errorHandler,
};
