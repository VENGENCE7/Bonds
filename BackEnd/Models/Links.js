import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  // Github
  gh: { type: String, trim: true },
  // Linkedin
  li: { type: String, trim: true },
  // Instagram
  ig: { type: String, trim: true },
  // Facebook
  fb: { type: String, trim: true },
  // Twitter
  tw: { type: String, trim: true },
  // Telegram
  tg: { type: String, trim: true },
  // mail1
  m1: { type: String, trim: true },
  // mail2
  m2: { type: String, trim: true },
});

export default mongoose.model("Link", LinkSchema);
