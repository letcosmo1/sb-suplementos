import dotenv from "dotenv";
dotenv.config();

import connectToMongoDB from "@mongoose/mongoose";
connectToMongoDB();

import express, { Application } from "express";
const app: Application = express();
const port: number = parseInt(process.env.PORT || "3000", 10);

import cors from "cors";
app.use(
  cors({
    origin: process.env.CORS_URL,
  })
);

import router from "@routes/products-router";
app.use(router);

// Json - BodyParser
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app
  .listen(port, () => {
    console.log({
      success: true,
      message: `Server is running at http://localhost:${port}`,
    });
  })
  .on("error", (error: any) => {
    console.error({
      success: false,
      message: `Error opening server on port: ${port}`,
      error: error.message,
    });
  });
