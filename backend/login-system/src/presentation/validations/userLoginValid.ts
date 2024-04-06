import { emailType, passwordType } from "@Types/userTypes";
import { body, validationResult } from "express-validator";
import { UserError } from "@Errors/user/UserError";

function validationSqlPassword(value: string) {
  if (/[^a-zA-Z0-9\sàáâãçéêíóôõúü!@#$%¨&_*-]/.test(value)) {
    throw new Error("A senha não pode conter alguns caracteres especiais.");
  }
  return true;
}

export const userLoginValid = async (
  req: Request,
  email: emailType,
  password: passwordType
) => {
  const validationRules = [
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
  ];

  await Promise.all(validationRules.map((rule) => rule.run(req)));
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = errors.array();
    const userError = UserError(error, false, "userLoginValid", 422);
    return userError;
  }
};
