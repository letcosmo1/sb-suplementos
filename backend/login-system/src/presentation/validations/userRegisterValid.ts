import {
  birthType,
  confirmPasswordType,
  emailType,
  nameType,
  passwordType,
  surnameType,
  telephoneType,
} from "../../domain/entities/types/userTypes";
import { body, validationResult } from "express-validator";
import { UserError } from "../errors/user/UserError";

function validationNameAndSurname(value: string) {
  if (/[^a-zA-Z0-9\sàáâãçéêíóôõúü]/.test(value)) {
    throw new Error("A senha não pode conter alguns caracteres especiais.");
  }
  return true;
}
function validationTelephone(value: string) {
  if (/\(\d{2}\)\s\{4,5}-?\d{4}/g.test(value)) {
    throw new Error("Telefone inválido");
  }
  return true;
}
function validationSqlPassword(value: string) {
  if (/[^a-zA-Z0-9\sàáâãçéêíóôõúü!@#$%¨&_*-]/.test(value)) {
    throw new Error("A senha não pode conter alguns caracteres especiais.");
  }
  return true;
}

export const userRegisterValid = async (
  req: Request,
  name: nameType,
  surname: surnameType,
  telephone: telephoneType,
  birth: birthType,
  email: emailType,
  password: passwordType,
  confirmPassword: confirmPasswordType
) => {
  const validationRules = [
    body("name")
      .escape()
      .not()
      .notEmpty()
      .withMessage("O Nome é obrigatório.")
      .custom(validationNameAndSurname)
      .withMessage("O nome não pode conter caracteres especiais."),
    body("surname")
      .escape()
      .not()
      .notEmpty()
      .withMessage("O Sobrenome é obrigatório.")
      .custom(validationNameAndSurname)
      .withMessage("O nome não pode conter caracteres especiais."),
    body("telephone")
      .escape()
      .not()
      .notEmpty()
      .withMessage("O Telefone é obrigatório.")
      .custom(validationTelephone)
      .withMessage("Formato do telefone inválido"),
    body("email")
      .escape()
      .not()
      .notEmpty()
      .withMessage("O Email é obrigatório.")
      .isEmail()
      .withMessage("O Email não é valído."),
    body("password")
      .escape()
      .not()
      .notEmpty()
      .withMessage("A senha é obrigatória.")
      .custom((value) => value.length >= 5)
      .withMessage("A senha deve conter no minimo 5 caracteres.")
      .custom(validationSqlPassword),
    body("confirmPassword")
      .escape()
      .not()
      .notEmpty()
      .withMessage("A confirmação de senha é obrigatória.")
      .custom((value, { req }) => value === req.body.password)
      .withMessage("As senha devem ser iguais."),
  ];

  await Promise.all(validationRules.map((rule) => rule.run(req)));
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = errors.array();
    const userError = UserError(error, false, "userRegisterValid", 422);
    return userError;
  }
};
