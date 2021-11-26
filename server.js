const http = require('http');
// const path = require('path');
// const fs = require('fs');
// const Koa = require('koa');
const { registerUser } = require('./routes/users/register');

// @future miiddlewares

// const app = new Koa();

// const middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

// middlewares.forEach((middleware) => {
//   app.use(require('./middlewares/' + middleware));
// });

const server = http.createServer((req, res) => {
  if (req.url === '/api/users' && req.method === 'POST') {
    registerUser(req, res);
  }
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
