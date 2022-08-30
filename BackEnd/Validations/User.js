import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";

const joi_password = Joi.extend(joiPasswordExtendCore);

const UserValidations = {
  CreateOrUpdateUser: {
    body: Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required(),
      password: joi_password
        .string()
        .min(8)
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required(),
    }).with("email", "password"),
  },
};

export default UserValidations;
