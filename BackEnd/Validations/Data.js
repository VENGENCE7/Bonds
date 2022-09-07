import Joi from "joi";
import LinksValidations from "./Links";

const DataValidations = {
  addOrUpdateData: {
    body: Joi.object({
      userId:Joi.string(),
      name: Joi.string().trim(),
      image: Joi.string().trim(),
      designation: Joi.string().trim(),
      accountCreated: Joi.date(),
      description: Joi.string().trim(),
      socialLinks: LinksValidations,
      otherLinks: Joi.object().pattern(Joi.string(), Joi.string()),
    }),
  },
};

export default DataValidations;
