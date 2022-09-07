import Joi from "joi";
import LinkDetailValidations from "./LinkDetail";

const LinksValidations = Joi.object({
  gh: LinkDetailValidations,
  li: LinkDetailValidations,
  ig: LinkDetailValidations,
  fb: LinkDetailValidations,
  tw: LinkDetailValidations,
  tg: LinkDetailValidations,
  m1: LinkDetailValidations,
  m2: LinkDetailValidations,
});

export default LinksValidations;
