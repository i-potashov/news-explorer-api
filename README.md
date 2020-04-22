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
POST https://sprint15yp.tk/signup
```

```sh
POST https://sprint15yp.tk/signin
```

```sh
POST https://sprint15yp.tk/clearcookie
```

After authorization:
```sh
GET https://sprint15yp.tk/users
GET https://sprint15yp.tk/users/:userId
```
```sh
POST https://sprint15yp.tk/cards
```

```sh
GET https://sprint15yp.tk/cards
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
POST /clearcookie
GET /users
GET /users/:userId
GET /cards
POST /cards
```
## Todos

 - Fix custom errors
 
## License

MIT license. [See LICENSE](./LICENSE) for details.
