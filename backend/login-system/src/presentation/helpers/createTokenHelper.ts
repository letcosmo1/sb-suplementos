import jwt from "jsonwebtoken";
import { userRegisterInterface } from "@UserInterface/userInterface";

export const createToken = async (data: userRegisterInterface | any) => {
  const token = await jwt.sign(
    {
      id: data.id,
      name: data.name,
      email: data.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    `${process.env.TOKEN}`
  );

  return token;
};
