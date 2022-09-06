import mongoose from "mongoose";
import LinkSchema from "./Links";

const DataSchema = new mongoose.Schema({
  // userID
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  // name
  name: { type: String, trim: true },
  // image
  image: { type: String, trim: true },
  // designation
  designation: { type: String, trim: true },
  // date created
  accountCreated:{ type: Date, default: Date.now },
  // description
  description: { type: String, trim: true },
  // Social Links
  links: LinkSchema,
});

export default mongoose.model("Data", DataSchema);
