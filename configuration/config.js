require('dotenv').config();

const PORT = process.env.PORT === 'production' ? process.env.PORT : 3000;
const DB = process.env.NODE_ENV === 'production' ? process.env.DATA_BASE : 'mongodb://localhost:27017/newsdb';
const JWT_KEY = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'a504cd18bc794250f0e69430f5b8f57ce668ec67e1e10e51341cc6885126553e';

module.exports = {
  DB,
  PORT,
  JWT_KEY,
};
