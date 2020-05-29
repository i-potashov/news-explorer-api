const articles = require('express').Router();
const authorization = require('../middlewares/auth');

const { getArticles, createArticle, deleteArticle } = require('../controllers/articles');
const { articleCreateCheck, articleIdCheck } = require('../modules/validations');

articles.get('/articles', authorization, getArticles);
articles.post('/articles', authorization, articleCreateCheck, createArticle);
articles.delete('/articles/:articleId', authorization, articleIdCheck, deleteArticle);

module.exports = articles;
