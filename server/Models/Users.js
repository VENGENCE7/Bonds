import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: { type: String, trim: true, required: true },
    data: {
      type: mongoose.Types.ObjectId,
      ref: "Data",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
