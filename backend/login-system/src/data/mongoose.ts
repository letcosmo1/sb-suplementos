import mongoose from "mongoose";
import { connectError } from "@Errors/server/connectError";

async function connectToMongoDB() {
  if (process.env.URI_MONGOOSE) {
    await mongoose.connect(process.env.URI_MONGOOSE);
  } else {
    throw new Error(
      "The connection failed because it doesn't have the uri in the .env"
    );
  }
}

connectToMongoDB()
  .then(() => {
    console.log({ success: true, message: `Connection success in mongoose.` });
  })
  .catch((err) => {
    const result = connectError(err);
    console.log({ localError: "connectToMongoDB() in mongoose.ts", result });
  });

export default connectToMongoDB;
