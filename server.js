const http = require('http');
const { registerUser } = require('./controllers/users/userController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/users' && req.method === 'POST') {
    registerUser(req, res);
  }
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
