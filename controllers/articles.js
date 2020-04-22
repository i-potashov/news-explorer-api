const Article = require('../models/article');
const NotFoundError = require('../errors/NotFoundError');
const { ITEM_NOT_FOUND, ACCESS_DENIED } = require('../configuration/constants');

module.exports.getArticles = (req, res, next) => {
  Article.find({owner: req.user._id})
    .then((article) => {
      return res.status(200).send(article.map(val=> Article.filterArticles(val._doc)))
    })
    .catch(next);
};

module.exports.createArticle = (req, res, next) => {
  const {keyword, title, text, date, source, link, image} = req.body;
  const owner = req.user._id;
  Article.create({ keyword, title, text, date, source, link, image, owner })
    .then((article) => res.status(201).send(Article.filterArticles(article._doc)))
    .catch(next);
};

module.exports.deleteArticle = (req, res, next) => {
  const { articleId } = req.params;
  Article.findById({ _id: articleId })
    .then((article) => {
      if (!article) {
        return next(new NotFoundError(ITEM_NOT_FOUND));
      }
      if (article.owner.equals(req.user._id)) {
        return Article.remove(article).then(() => res.status(200).send({ data: article }));
      }
      return res.status(403).send({ message: ACCESS_DENIED });
    })
    .catch(next);
};
