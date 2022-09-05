import Joi from "joi";

const DataValidations = {
  addOrUpdateData: {
    body: Joi.object({
      name: Joi.string().trim(),
      image: Joi.string().trim(),
      designation: Joi.string().trim(),
      links: Joi.object().pattern(Joi.string(), Joi.string()),
      description: Joi.string().trim(),
    }),
  },
};

export default DataValidations;
