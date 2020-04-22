const articles = require('express').Router();
const { getArticles, createArticle, deleteArticle } = require('../controllers/articles');
const { articleCreateCheck } = require('../modules/validations');

articles.get('/articles', getArticles);
articles.post('/articles', articleCreateCheck, createArticle);
articles.delete('/articles/:articleId', deleteArticle);

module.exports = articles;
