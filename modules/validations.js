const { celebrate, Joi } = require('celebrate');
const BadRequestError = require('../errors/BadRequest');
const { ITEM_NOT_FOUND } = require('../configuration/constants');
Joi.objectId = require('joi-objectid')(Joi);

const userLoginCheck = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const userCreateCheck = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
});

const articleCreateCheck = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required().min(2).max(30),
    title: Joi.string().required().min(2).max(30),
    text: Joi.string().required().min(2).max(3000),
    date: Joi.string().required().min(2).max(30),
    source: Joi.string().required().min(2).max(30),
    link: Joi.string().required().uri(),
    image: Joi.string().required().uri(),
  }),
});

const articleIdCheck = celebrate({
  params: Joi.object().keys({
    articleId: Joi.objectId().required().error(new BadRequestError(ITEM_NOT_FOUND)),
  }),
});

module.exports = {
  userLoginCheck, userCreateCheck, articleCreateCheck, articleIdCheck,
};
