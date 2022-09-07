import mongoose from "mongoose";
import LinkDetailSchema from "./LinkDetail";

const LinkSchema = new mongoose.Schema(
  {
    // Github
    gh: { type: LinkDetailSchema, default: {} },
    // Linkedin
    li: { type: LinkDetailSchema, default: {} },
    // Instagram
    ig: { type: LinkDetailSchema, default: {} },
    // Facebook
    fb: { type: LinkDetailSchema, default: {} },
    // Twitter
    tw: { type: LinkDetailSchema, default: {} },
    // Telegram
    tg: { type: LinkDetailSchema, default: {} },
    // mail1
    m1: { type: LinkDetailSchema, default: {} },
    // mail2
    m2: { type: LinkDetailSchema, default: {} },
  },
  { _id: false }
);

export default LinkSchema;
