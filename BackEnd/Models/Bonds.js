import mongoose from "mongoose";

const SocialSchema = new mongoose.Schema({
  Index: mongoose.Schema.Types.ObjectId,
  Github: String,
  Instagram: String,
  Facebook: String,
  Twitter: String,
  Telegram: String,
  Gmail: String,
});

export default mongoose.model("Social", SocialSchema);
