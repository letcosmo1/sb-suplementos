import { Request } from "express";

export const getTokenHelper = (req: Request) => {
    const auth = req.headers["authorization"];
    const token = auth?.split(" ")[1];

    return token;
};
