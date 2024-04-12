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

// Json - BodyParser
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import router from "@routes/products-router";
import routerCategory from "@routes/category-router";
import routerTransaction from "@routes/transaction-router";
import routerAdmin from "@routes/user-admin-router";
app.use(routerAdmin);
app.use(router);
app.use(routerCategory);
app.use(routerTransaction);

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
