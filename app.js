// при попытке создать пользователя с почтовым ящиком, который уже занят, необходимо отправлять ошибку со статусом 409
// joi валидация даты
// email дублирование
// user controller использовать деструктуризацию
// добавить в ридми  возможности
// проверить через постман
//разобраться с датой
// настроить сервер 2 ссл сертификата

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { DB, PORT } = require('./configuration/config');
const { errorHandler } = require('./middlewares/errorHandler');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { userLoginCheck, userCreateCheck } = require('./modules/validations');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(requestLogger); // подключаем логгер запросов
app.post('/signin', userLoginCheck, login);
app.post('/signup', userCreateCheck, createUser);
app.use(cookieParser());
app.use(auth);
app.use(routes);
app.use(errorLogger); // подключаем логгер ошибок
app.use(errors()); // Обработчик ошибок celebrate

app.use(errorHandler); // Централизованный обработчик ошибок
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
