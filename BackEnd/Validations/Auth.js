import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";

const joi_password = Joi.extend(joiPasswordExtendCore);

const AuthValidations = {
  SignUpUser: {
    body: Joi.object({
      name: Joi.string().trim().token().min(3).max(30).required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: {
            allow: ["com", "net", "in", "co"],
          },
        })
        .trim()
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

  LogInUser: {
    body: Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: {
            allow: ["com", "net", "in", "co"],
          },
        })
        .trim()
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

export default AuthValidations;
