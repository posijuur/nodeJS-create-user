let users = require("../data/users");
const { v4: uuid } = require("uuid");

const { writeDataToFile } = require("../utils");

// Promise is here for future
function create(user) {
 return new Promise((resolve, reject) => {
  const newUser = { id: uuid(), ...user };
  users.push(newUser)

  writeDataToFile("./data/users.json", users);
  resolve(newUser);
 });
}

module.exports = {
 create,
};
