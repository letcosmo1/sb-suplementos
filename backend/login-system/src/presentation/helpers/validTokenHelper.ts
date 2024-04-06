import jwt from "jsonwebtoken";

export const validTokenHelper = async (token: any) => {
  const verifyToken = jwt.verify(
    token,
    `${process.env.TOKEN}`,
    (err: any, decoded: any) => {
      if (err) return { success: false };
      return decoded;
    }
  );

  try {
    return verifyToken;
  } catch (error) {
    return error;
  }
};
