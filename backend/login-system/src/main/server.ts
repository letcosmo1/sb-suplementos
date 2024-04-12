import dotenv from "dotenv";
dotenv.config();

import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../../swagger.json";

import bodyParser from "body-parser";
import { openServerError } from "@Errors/server/openServerError";

// Connection DB
import connectToMongoDB from "@Mongoose/mongoose";
connectToMongoDB();

const app = express();
const port = process.env.PORT;

import cors from "cors";
app.use(
  cors({
    origin: process.env.CORS_URL,
  })
);

// Json - BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
import { router } from "./routes/routes";
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("*", (req, res) => {
  res.redirect("/api-docs");
});

app.listen(port, () => {
  try {
    console.log({ success: true, message: `Server opening on port: ${port}` });
  } catch (error) {
    const result = openServerError(error);
    console.log({ localError: "app.listen in server.ts", result });
  }
});
