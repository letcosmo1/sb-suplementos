import {
  passConfirmPassInterface,
  redefinePasswordInterface,
  sendTokenInterface,
  userLoginInterface,
  userRegisterInterface,
} from "@UserInterface/userInterface";
import { UserError } from "@Errors/user/UserError";
import { getDateHelper } from "@Helpers/getDateHelper";
import { compareEmailHelper, emailHash, hashHelper } from "@Helpers/hashHelper";
import { userModel } from "@Models/userModel";
import { createClient } from "redis";
const client = createClient();
client.on("error", (err) => console.log("Redis Client Error", err));

export class UserRepositorie {
  async registerUser(data: userRegisterInterface) {
    const { email } = data;
    const getDate = getDateHelper();

    const emailCript = await emailHash(email);
    const emailDescript = await compareEmailHelper(emailCript);

    const users = await userModel.find();

    let emailExists = false;

    for (const user of users) {
      const storedEmailDecript = await compareEmailHelper(user.email);

      if (emailDescript === storedEmailDecript) {
        emailExists = true;
        break;
      }
    }

    if (emailExists == true) {
      const userError = UserError(
        "Email já cadastrado!",
        false,
        "email exists userRepository",
        409
      );
      return userError;
    }

    try {
      const passwordHash = await hashHelper(data.password);
      data.password = passwordHash;
      data.email = emailCript;

      const userSave = await userModel.create({
        name: data.name,
        surname: data.surname,
        telephone: data.telephone,
        birth: data.birth,
        email: data.email,
        password: data.password,
        lastModified: getDate,
      });

      return userSave;
    } catch (error) {
      const newError = error as TypeError;
      const userError = UserError(newError, false, "userRepository", 500);
      return userError;
    }
  }

  async loginUser(data: userLoginInterface) {
    const { email } = data;

    const users = await userModel.find();

    let userById;
    let emailExists = true;

    for (const user of users) {
      const storedEmailDecript = await compareEmailHelper(user.email);

      if (email === storedEmailDecript) {
        emailExists = false;
        userById = await userModel.findById(user);
        break;
      }
    }

    if (emailExists === true) {
      const userError = UserError(
        "Email não cadastrado!",
        false,
        "email don't exists userRepository",
        422
      );
      return userError;
    }

    try {
      return userById;
    } catch (error) {
      const newError = error as TypeError;
      const userError = UserError(newError, false, "userRepository", 500);
      return userError;
    }
  }

  async sendCode(data: sendTokenInterface) {
    const { email } = data;

    const users = await userModel.find();

    let userById;
    let emailExists = true;

    for (const user of users) {
      const storedEmailDecript = await compareEmailHelper(user.email);

      if (email === storedEmailDecript) {
        emailExists = false;
        userById = await userModel.findById(user);
        break;
      }
    }

    if (emailExists === true) {
      const userError = UserError(
        "Email não cadastrado!",
        false,
        "email don't exists userRepository",
        422
      );
      return userError;
    }

    try {
      return userById;
    } catch (error) {
      const newError = error as TypeError;
      const userError = UserError(newError, false, "userRepository", 500);
      return userError;
    }
  }

  async redefinePassword(
    data: redefinePasswordInterface,
    pass: passConfirmPassInterface
  ) {
    const { id, code } = data;
    const { password } = pass;

    await client.connect();
    const codeValid = await client.get(code);
    await client.disconnect();

    if (codeValid === null)
      return {
        success: false,
        error: "Token inválido!",
        codeError: 422,
        typeError: "Redefine Password",
      };

    if (id === null)
      return {
        success: false,
        error: "Token inválido!",
        codeError: 422,
        typeError: "Redefine Password",
      };

    const userExists = await userModel.findById(id);

    if (userExists === null)
      return {
        success: false,
        error: "Token inválido!",
        codeError: 422,
        typeError: "Redefine Password",
      };

    try {
      const passwordHash = await hashHelper(password);
      const result = await userModel.findByIdAndUpdate(id, {
        password: passwordHash,
      });
      await client.connect();
      await client.del(code);
      await client.disconnect();
      return result;
    } catch (error) {
      const newError = error as TypeError;
      const userError = UserError(newError, false, "userRepository", 500);
      return userError;
    }
  }
}
