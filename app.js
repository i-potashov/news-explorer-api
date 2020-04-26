const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { DB, PORT } = require('./configuration/config');
const { errorHandler } = require('./middlewares/errorHandler');
const { limiter } = require('./middlewares/rateLimiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(limiter);
app.use(requestLogger); // подключаем логгер запросов
app.use(helmet());
app.use(cookieParser());
app.use(routes);
app.use(errorLogger); // подключаем логгер ошибок
app.use(errors()); // Обработчик ошибок celebrate
app.use(errorHandler); // Централизованный обработчик ошибок
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
