import { emailType } from "@Types/userTypes";
import { body, validationResult } from "express-validator";
import { UserError } from "@Errors/user/UserError";

export const userSendCodeValid = async (
  req: Request,
  email: emailType,
) => {
  const validationRules = [
    body("email")
      .escape()
      .not()
      .notEmpty()
      .withMessage("O Email é obrigatório.")
      .isEmail()
      .withMessage("O Email não é valído."),
  ];

  await Promise.all(validationRules.map((rule) => rule.run(req)));
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = errors.array();
    const userError = UserError(error, false, "userSendCodeValid", 422);
    return userError;
  }
};
