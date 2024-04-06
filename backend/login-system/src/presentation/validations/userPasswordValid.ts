import {
  passwordType,
  confirmPasswordType,
} from "../../domain/entities/types/userTypes";
import { body, validationResult } from "express-validator";
import { UserError } from "../errors/user/UserError";

function validationNameAndSurname(value: string) {
  if (/[^a-zA-Z0-9\sàáâãçéêíóôõúü]/.test(value)) {
    throw new Error("A senha não pode conter alguns caracteres especiais.");
  }
  return true;
}
function validationSqlPassword(value: string) {
  if (/[^a-zA-Z0-9\sàáâãçéêíóôõúü!@#$%¨&_*-]/.test(value)) {
    throw new Error("A senha não pode conter alguns caracteres especiais.");
  }
  return true;
}

export const userPasswordValid = async (
  req: Request,
  password: passwordType,
  confirmPassword: confirmPasswordType
) => {
  const validationRules = [
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
    const userError = UserError(error, false, "userPasswordValid", 422);
    return userError;
  }
};
