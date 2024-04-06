import jwt from "jsonwebtoken";

export class tokenRedefinePassword {
  async createTokenPasswordHelper(userID: any, code: any) {
    const token = jwt.sign(
      {
        id: userID,
        code: code,
        exp: Math.floor(Date.now() / 1000) + 5 * 60,
      },
      `${process.env.TOKEN}`
    );

    return token;
  }

  async descriptTokenPasswordHelp(token: any) {
    const decript = jwt.verify(
      token,
      process.env.TOKEN!,
      (err: any, verify: any) => {
        if (err)
          return { success: false, error: "Token inválido!", codeError: 422 };
        return verify;
      }
    );
    return decript;
  }
}
