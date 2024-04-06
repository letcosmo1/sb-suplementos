import { Request, Response } from "express";
import { UserError } from "@Errors/user/UserError";
import { RegisterError } from "@EntitiesErros/registerErrorsTypes";
import { UserRepositorie } from "@Repositories/userRepositorie";
import {
  LoginUserCase,
  RedefinePasswordUserCase,
  RegisterUserCase,
  SendTokenUserCase,
} from "@UserCase/userUseCase";
import {
  userLoginInterface,
  userRegisterInterface,
  sendTokenInterface,
  redefinePasswordInterface,
  passConfirmPassInterface,
} from "@UserInterface/userInterface";
import {
  ConfirmPasswordEntitie,
  SendTokenEntitie,
  UserLoginEntitie,
  UserRegisterEntitie,
} from "@Entities/UserEntitie";
import { createToken } from "@Helpers/createTokenHelper";
import { getTokenHelper } from "@Helpers/getTokenHelper";
import { validTokenHelper } from "@Helpers/validTokenHelper";
import { sendEmailHelper } from "@Helpers/sendCodeEmailHelper";
import { tokenRedefinePassword } from "@Helpers/createTokenPasswordHelper";

export class UserController {
  static async registerUser(req: Request, res: Response) {
    const {
      name,
      surname,
      telephone,
      birth,
      email,
      password,
      confirmPassword,
    } = req.body;

    const userEntitie: userRegisterInterface = new UserRegisterEntitie(
      name,
      surname,
      telephone,
      birth,
      email,
      password,
      confirmPassword
    );
    const userRepository = new UserRepositorie();
    const registerUserCase = new RegisterUserCase(userRepository);
    const result = await registerUserCase.execute(req, userEntitie);

    if (result.success === false) {
      return res.status(result.codeError).json(result);
    }

    try {
      const token = await createToken(result);

      res.status(200).json({
        success: true,
        message: "Usuario criado com sucesso",
        user: result,
        token: token,
      });
    } catch (error) {
      const result = UserError(error as RegisterError);
      res.status(501).json({
        localError: "registerUser in UserController.ts",
        result,
      });
    }
  }

  static async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;

    const userEntitie: userLoginInterface = new UserLoginEntitie(
      email,
      password
    );

    const userRepository = new UserRepositorie();
    const loginUserCase = new LoginUserCase(userRepository);
    const result = await loginUserCase.execute(req, userEntitie);

    if (result.success === false) {
      return res.status(result.codeError).json(result);
    }

    try {
      const token = await createToken(result);

      res.status(200).json({
        success: true,
        message: "Usuario logado com sucesso.",
        token: token,
      });
    } catch (error) {
      const result = UserError(error as RegisterError);
      res.status(501).json({
        localError: "loginUser in UserController.ts",
        result,
      });
    }
  }

  static async getToken(req: Request, res: Response) {
    const token = getTokenHelper(req);
    const validToken: any = await validTokenHelper(token);

    if (validToken?.success === false)
      return res.status(401).json({ error: "Invalid Token", success: false });

    try {
      res.status(200).json(validToken);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async sendCode(req: Request, res: Response) {
    const { email } = req.body;

    const userEntitie: sendTokenInterface = new SendTokenEntitie(email);

    const userRepository = new UserRepositorie();
    const tokenPassword = new tokenRedefinePassword();
    const sendToken = new SendTokenUserCase(userRepository);

    const { result, code } = await sendToken.execute(req, userEntitie);

    if (result && result.success === false) {
      return res.status(result.codeError).json(result);
    }

    var splitCode = code.split(" ")[0];
    var splitUserId = code.split(" ")[1];
    const getTokenPassword = await tokenPassword.createTokenPasswordHelper(
      splitUserId,
      splitCode
    );

    await sendEmailHelper(email, getTokenPassword);

    try {
      res.status(200).json({
        success: true,
        message: "Codigo enviado com sucesso!",
        email: email,
      });
    } catch (error) {
      const result = UserError(error as RegisterError);
      res.status(501).json({
        localError: "sendCode in UserController.ts",
        result,
      });
    }
  }

  static async redefinePassword(req: Request, res: Response) {
    const token: any = req.params.token;
    const { password, confirmPassword } = req.body;

    const passEntitie: passConfirmPassInterface = new ConfirmPasswordEntitie(
      password,
      confirmPassword
    );

    const userRepository = new UserRepositorie();
    const redefinePassword = new RedefinePasswordUserCase(userRepository);

    const result = await redefinePassword.execute(req, token, passEntitie);

    if (result && result.success === false)
      return res.status(result.codeError).json(result);

    
    try {
      res.status(200).json({
        success: true,
        message: "Senha alterada com sucesso!",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}