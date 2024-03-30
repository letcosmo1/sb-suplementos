import mongoose from "mongoose";
import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "test" ? ".env.teste" : ".env";
dotenv.config({ path: envFile });

async function connectToMongoDB() {
  if (envFile === ".env.teste") {
    await mongoose.connect(process.env.URI_MONGOOSE_TESTE!);
  } else {
    if (process.env.URI_MONGOOSE) {
      await mongoose.connect(process.env.URI_MONGOOSE);
    } else {
      throw new Error(
        "The connection failed because it doesn't have the uri in the .env"
      );
    }
  }
}

connectToMongoDB()
  .then(() => {
    console.log({
      success: true,
      message: `Connection success in mongoose. URI: ${
        envFile === ".env.teste"
          ? process.env.URI_MONGOOSE_TESTE
          : "Access the .env to check the URI"
      }`,
    });
  })
  .catch((error) => {
    console.error({
      success: false,
      message: `Error connection mongoose URI: ${process.env.URI_MONGOOSE}`,
      error: error.message,
    });
  });

export default connectToMongoDB;
