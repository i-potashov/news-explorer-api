const articles = require('express').Router();
const { getArticles, createArticle, deleteArticle } = require('../controllers/articles');
const { articleCreateCheck, articleIdCheck } = require('../modules/validations');

articles.get('/', getArticles);
articles.post('/', articleCreateCheck, createArticle);
articles.delete('/:articleId', articleIdCheck, deleteArticle);

module.exports = articles;
