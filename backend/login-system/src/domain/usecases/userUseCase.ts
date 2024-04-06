import { databaseTypes } from "@Entities/types/databaseTypes";
import {
  passConfirmPassInterface,
  sendTokenInterface,
  userLoginInterface,
  userRegisterInterface,
} from "@UserInterface/userInterface";
import { userRegisterValid } from "@Validations/userRegisterValid";
import { Request } from "express";
import { UserError } from "@Errors/user/UserError";
import { userLoginValid } from "@Validations/userLoginValid";
import { comparePasswordHelper } from "@Helpers/hashHelper";
import { userSendCodeValid } from "@Validations/userSendCodeValid";
import { generateCode } from "@Helpers/generateCode";
import { tokenRedefinePassword } from "@Helpers/createTokenPasswordHelper";
import { userPasswordValid } from "@Validations/userPasswordValid";

export class RegisterUserCase {
  private UserRepositorie;
  constructor(UserRepositorie: databaseTypes) {
    this.UserRepositorie = UserRepositorie;
  }

  async execute(req: Request | any, data: userRegisterInterface) {
    const {
      name,
      surname,
      telephone,
      birth,
      email,
      password,
      confirmPassword,
    } = data;

    const validation = await userRegisterValid(
      req,
      name,
      surname,
      telephone,
      birth,
      email,
      password,
      confirmPassword
    );

    if (validation?.success == false) {
      const userError = UserError(
        validation.error,
        validation.success,
        validation.typeError,
        validation.codeError
      );
      return userError;
    }

    try {
      const result = await this.UserRepositorie.registerUser(data);
      return result;
    } catch (e) {
      const error = e as string;
      const userError = UserError(
        error,
        false,
        "userInsertIntoRepository",
        500
      );
      return userError;
    }
  }
}

export class LoginUserCase {
  private UserRepositorie;
  constructor(UserRepositorie: databaseTypes) {
    this.UserRepositorie = UserRepositorie;
  }
  async execute(req: Request | any, data: userLoginInterface) {
    const { email, password } = data;

    const validation = await userLoginValid(req, email, password);

    if (validation?.success == false) {
      const userError = UserError(
        validation.error,
        validation.success,
        validation.typeError,
        validation.codeError
      );
      return userError;
    }
    const result = await this.UserRepositorie.loginUser(data);

    if (result.success === false) return result;
    const comparePassword = await comparePasswordHelper(
      password,
      result.password
    );

    if (comparePassword !== true) return comparePassword;

    try {
      return result;
    } catch (e) {
      const error = e as string;
      const userError = UserError(error, false, "userLoginIntoRepository", 500);
      return userError;
    }
  }
}

export class SendTokenUserCase {
  private UserRepositorie;
  constructor(UserRepositorie: databaseTypes) {
    this.UserRepositorie = UserRepositorie;
  }

  async execute(req: Request | any, data: sendTokenInterface) {
    const { email } = data;

    const validation = await userSendCodeValid(req, email);

    if (validation?.success == false) {
      const userError = UserError(
        validation.error,
        validation.success,
        validation.typeError,
        validation.codeError
      );
      return userError;
    }

    const result = await this.UserRepositorie.sendCode(data);

    if (result.success === false) return result;

    const code = await generateCode(result);

    try {
      return { result, code };
    } catch (e) {
      const error = e as string;
      const userError = UserError(error, false, "sendTokenIntoRepository", 500);
      return userError;
    }
  }
}

export class RedefinePasswordUserCase {
  private UserRepositorie;
  constructor(UserRepositorie: databaseTypes) {
    this.UserRepositorie = UserRepositorie;
  }

  async execute(req: Request | any, data: any, pass: passConfirmPassInterface) {
    const {password, confirmPassword} = pass
    const token = data;
    const newToken = token.split("=")[1];

    const tokenPassword = new tokenRedefinePassword();
    const decriptToken: any = await tokenPassword.descriptTokenPasswordHelp(
      newToken
    );

    if (decriptToken.success === false) return decriptToken;

    const validation = await userPasswordValid(
      req,
      password,
      confirmPassword
    );

    if (validation?.success == false) {
      const userError = UserError(
        validation.error,
        validation.success,
        validation.typeError,
        validation.codeError
      );
      return userError;
    }

    try {
      const result = await this.UserRepositorie.redefinePassword(decriptToken, pass);
      return result;
    } catch (e) {
      const error = e as string;
      const userError = UserError(
        error,
        false,
        "userRedefinePassword",
        500
      );
      return userError;
    }
  }
}
