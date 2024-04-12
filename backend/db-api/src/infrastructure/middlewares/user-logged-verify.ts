import { NextFunction, Request, Response } from "express";
import axios from "axios";

export const VerifyUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  try {
    const response = await axios.get("http://localhost:3001/user/gettoken", {
      headers: { Authorization: token },
    });

    if (response.data.success !== false) {
      next();
    }
  } catch (error) {
    res.status(401).json({ mensagem: "Sem Autorização" });
  }
};
