# news-explorer-api
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/I-potashov/news-explorer-api/level-1?color=green)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Overview
Backend for the "News-explorer" project, implemented on the basis of Node.js and Express.js, user data is stored in the MongoDB database.

Backend API on a subdomain [API.Backa.ru](https://api.backa.ru)

**Implemented:**
* A centralized error handler.

* Request validation  based on the [joi](https://www.npmjs.com/package/@hapi/joi) and [celebrate](https://www.npmjs.com/package/celebrate).

* Logging requests and errors based on [winston](https://www.npmjs.com/package/winston).

* Code analysis is implemented using [eslint](https://www.npmjs.com/package/eslint).

## Getting started
Using the Postman program, you can run multiple queries:

```sh
POST https://backa.ru/signup
```

```sh
POST https://backa.ru/signin
```

After authorization:
```sh
GET https://backa.ru/users/me
```
```sh
POST https://backa.ru/articles
```

```sh
DELETE https://backa.ru/articles/:id
```

## Launch locally

**Clone the repository:**
```sh
$ git clone https://github.com/i-potashov/news-explorer-api.git
```

**installing npm packages**
```sh
$ npm install
```

**Start server:**
```sh
$ npm run start
```

**Start server with hot reload:**
```sh
$ npm run dev
```

**For analyzes your code to quickly find and fix problems:**
```sh
$ npm run eslint
$ npm run eslintfix
```

**After starting the server, you can try these queries:**

```sh
POST /signin
POST /signup
GET /users/me
POST /articles
GET /articles
DELETE /articles/:id
```
## Todos

 - Fix custom errors
 
## License

MIT license. [See LICENSE](./LICENSE) for details.
