import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  telephone: {
    type: String,
    require: true,
  },
  birth: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastModified: {
    type: String,
    require: true,
  },
});

export const userModel = mongoose.model("users", userSchema);
