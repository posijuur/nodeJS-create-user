const User = require("../../models/userModel");
const { registerSchema } = require("./userController.helper");
const users = require("../../data/users");
const { getPostData, errorHandler } = require("../../utils");

// @desc    Create a user
// @route   POST /api/users
async function registerUser(req, res) {
 try {
  const body = await getPostData(req);
  if (!body) {
   return errorHandler(res, 400, "Bad Request");
  }

  const { email, firstName, lastName, phoneNumber, companyName, password } =
   JSON.parse(body);
  const user = {
   email,
   firstName,
   lastName,
   phoneNumber,
   companyName,
   password,
  };

  try {
   await registerSchema.validateAsync(user, { abortEarly: false });
  } catch (err) {
   return errorHandler(res, 400, "Bad Request");
  }

  const newUser = await User.create(user);

  res.writeHead(201, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(newUser));
 } catch (error) {
  return errorHandler(res, 500, "Server error");
 }
}

module.exports = {
 registerUser,
};
