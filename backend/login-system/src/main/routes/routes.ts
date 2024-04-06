import express from "express";
import { UserController } from "@Controllers/UserController";

export const router = express.Router();
router.post("/user/signin", UserController.loginUser);
router.post("/user/signup", UserController.registerUser);
router.post("/user/sendtoken", UserController.sendCode);
router.patch("/user/redefine/:token", UserController.redefinePassword);
router.get("/user/gettoken", UserController.getToken);