const mongoose = require('mongoose');
const validator = require('validator');
const { INVALID_LINK } = require('../configuration/constants');

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: { // Хз надо разобраться
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  owner: { // Нужно задать поведение по умолчанию, чтобы база данных не возвращала это поле.
    type: mongoose.Schema.Types.ObjectId,
  },
});

articleSchema.path('link').validate(validator.isURL, INVALID_LINK);
articleSchema.path('image').validate(validator.isURL, INVALID_LINK);

// eslint-disable-next-line func-names
articleSchema.statics.filterArticles = ({owner, __v, ...rest}) => rest;

module.exports = mongoose.model('article', articleSchema);


