require('dotenv').config();

const PORT = process.env.PORT === 'production' ? process.env.PORT : 3000;
const DB = process.env.NODE_ENV === 'production' ? process.env.DATA_BASE : 'mongodb://localhost:27017/newsdb';
const JWT_KEY = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'secret_key';

module.exports = {
  DB,
  PORT,
  JWT_KEY,
};
