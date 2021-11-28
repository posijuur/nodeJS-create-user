require('module-alias/register');
const http = require('http');
const { router } = require('@routes/router');
// const path = require('path');
// const fs = require('fs');
// const Koa = require('koa');

// @future miiddlewares

// const app = new Koa();

// const middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

// middlewares.forEach((middleware) => {
//   app.use(require('./middlewares/' + middleware));
// });

const server = http.createServer((req, res) => {
  router(req, res);
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
