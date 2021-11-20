const Joi = require('joi');

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  firstName: Joi.string().min(2).max(16).required(),
  lastName: Joi.string().min(2).max(16).required(),
  phoneNumber: Joi.string()
    .pattern(/^(?:\+38)?(093\d{7})$/)
    .required(),
  companyName: Joi.string().min(2).max(16).required(),
  password: Joi.string().min(5).max(16).required(),
});

module.exports = {
  registerSchema,
};
