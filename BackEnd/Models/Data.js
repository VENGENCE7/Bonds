import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  // index: mongoose.Schema.Types.ObjectId,
  // name
  name: { type: String, trim: true },
  // image
  image: { type: String, trim: true },
  // designation
  designation: { type: String, trim: true },
  // Social Links
  links: {},
  // description
  description: { type: String, trim: true },
});

export default mongoose.model("Data", DataSchema);
