const { registerUser } = require('@routes/users/register');
const { userRoutes } = require('@routes/routes');

const router = (req, res) => {
  if (req.url === userRoutes.postUser && req.method === 'POST') {
    registerUser(req, res);
  }
};

module.exports = {
  router,
};
