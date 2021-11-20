const { v4: uuid } = require('uuid');
const users = require('../data/users.json');

const { writeDataToFile } = require('../utils');

// Promise is here for future
const create = (user) =>
  new Promise((resolve) => {
    const newUser = { id: uuid(), ...user };
    users.push(newUser);

    writeDataToFile('./data/users.json', users);
    resolve(newUser);
  });

module.exports = {
  create,
};
