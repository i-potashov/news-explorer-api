const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { USER_NOT_FOUND } = require('../configuration/constants');
const { JWT_KEY } = require('../configuration/config');
const NotFoundError = require('../errors/NotFoundError');

// module.exports.getUser = (req, res, next) => {
//   User.findById(req.user._id)
//     .then((user) => res.send({ name: user.name, email: user.email }))
//     .catch(err => console.log('getuser  err---->', err))
//     .catch(next);
// };

module.exports.getUser = (req, res, next) => {
  console.log('reqUser-------->>>>', req.user);
  User.findById(req.user._id)
    .orFail(() => {
      console.log('getUser ERROR');
      throw new NotFoundError(USER_NOT_FOUND);
    })
    .then((user) => res.status(200).send({ data: user }))
    .catch(next);
};


module.exports.createUser = (req, res, next) => {
  const {
    email, password, name,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email, password: hash, name,
    }))
    .then((user) => res.status(201).send({
      _id: user._id,
      name: user.name,
      email: user.email,
    }))
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_KEY, { expiresIn: '7d' });
      return res
        .send({ token });
    })
    .catch(next);
};
