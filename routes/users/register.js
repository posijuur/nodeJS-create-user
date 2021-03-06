const { getPostData, errorHandler } = require('@root/utils');
const UserController = require('@controller/user.controller');
const { registerSchema } = require('@validation/users');

// @desc    Create a user
// @route   POST /api/users
const registerUser = async (req, res) => {
  try {
    const body = await getPostData(req);
    if (!body) {
      return errorHandler(res, 400, 'Bad Request');
    }

    const { email, firstName, lastName, phoneNumber, companyName, password } = JSON.parse(body);
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
      return errorHandler(res, 400, 'Bad Request');
    }
    
    const newUser = await UserController.create(user);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newUser));
  } catch (error) {
    return errorHandler(res, 500, 'Server error');
  }
};

module.exports = {
  registerUser,
};
