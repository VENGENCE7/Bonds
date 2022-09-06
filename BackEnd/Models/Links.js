import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    // Github
    gh: { type: String, trim: true, default: "" },
    // Linkedin
    li: { type: String, trim: true, default: "" },
    // Instagram
    ig: { type: String, trim: true, default: "" },
    // Facebook
    fb: { type: String, trim: true, default: "" },
    // Twitter
    tw: { type: String, trim: true, default: "" },
    // Telegram
    tg: { type: String, trim: true, default: "" },
    // mail1
    m1: { type: String, trim: true, default: "" },
    // mail2
    m2: { type: String, trim: true, default: "" },
  },
  { _id: false }
);

export default LinkSchema;
