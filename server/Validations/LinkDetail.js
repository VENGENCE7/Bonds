import Joi from "joi";

const LinkDetailValidations = Joi.object({
  link: Joi.string().trim(),
  active: Joi.bool(),
  visits: Joi.number().positive().allow(0),
  createdAt: Joi.date(),
});

export default LinkDetailValidations;
