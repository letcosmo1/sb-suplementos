import { passwordType, stringName } from "@Types/userTypes";
import bcrypt from "bcrypt";
import CryptoJS from "crypto-js";
import { UserError } from "@Errors/user/UserError";

export const hashHelper = async (string: stringName) => {
  const saltRounds = 12;

  const salt = bcrypt.genSaltSync(saltRounds);
  const stringHash = bcrypt.hashSync(string, salt);

  return stringHash;
};

export const emailHash = async (email: stringName) => {
  const criptAES = CryptoJS.AES.encrypt(email, process.env.ENCRIPT!).toString();
  const bytes = CryptoJS.enc.Base64;
  const emailCript = bytes.stringify(CryptoJS.enc.Utf8.parse(criptAES));

  return emailCript;
};

export const comparePasswordHelper = async (
  password: passwordType,
  passwordHash: passwordType
) => {
  if (password === null || passwordHash === null) {
    return UserError(
      "Erro indefinido!",
      false,
      "hashPasswordHelper ( Compare Password )",
      500
    );
  }

  const comparePassword = bcrypt.compareSync(password, passwordHash);

  if (comparePassword === false) {
    return UserError("Senha incorreta.", false, "hashPasswordHelper", 422);
  }

  return comparePassword;
};

export const compareEmailHelper = async (email: stringName) => {
  try {
    if (email === null) {
      return UserError(
        "Erro indefinido!",
        false,
        "compareEmailHelper ( Compare Email )",
        500
      );
    }

    const emailCript = CryptoJS.enc.Base64.parse(email).toString(
      CryptoJS.enc.Utf8
    );
    const bytesDescrip = CryptoJS.AES.decrypt(emailCript, process.env.ENCRIPT!);
    const emailDescrip = bytesDescrip.toString(CryptoJS.enc.Utf8);

    return emailDescrip;
  } catch (error) {
    return UserError(
      "Erro durante a descriptografia do email!",
      false,
      "compareEmailHelper ( Comparar Email )",
      500
    );
  }
};
