import mongoose from "mongoose";

const LinkDetailSchema = new mongoose.Schema(
  {
    // Link of  the social ID of the User
    link: { type: String, trim: true, default: "" },
    // to make usre link active or not
    active: { type: Boolean, required: true, default: false },
    // to keep track of visits on the link
    visits: { type: Number, required: true, default: 0 },
    //  to keep to track of when it was created
    createdAt: { type: Date, required: true, default: new Date() },
  },
  { _id: false }
);

export default LinkDetailSchema;
