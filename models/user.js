const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');
const { INVALID_EMAIL, USER_NOT_FOUND, NOT_UNIQUE } = require('../configuration/constants');
const LoginError = require('../errors/LoginError');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    uniqueCaseInsensitive: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
});

userSchema.plugin(uniqueValidator, { message: NOT_UNIQUE });
userSchema.path('email').validate(validator.isEmail, INVALID_EMAIL);

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new LoginError(USER_NOT_FOUND));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new LoginError(USER_NOT_FOUND));
          }
          return user;
        });
    });
};


module.exports = mongoose.model('user', userSchema);
