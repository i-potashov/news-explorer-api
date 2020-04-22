require('dotenv').config();

const DB = 'mongodb://localhost:27017/newsdb';
const PORT = process.env.PORT || 3000;
const JWT_KEY = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'secret_key';

module.exports = {
  DB,
  PORT,
  JWT_KEY,
};
