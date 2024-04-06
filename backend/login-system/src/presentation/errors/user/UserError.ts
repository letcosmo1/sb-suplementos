import { RegisterError } from "@EntitiesErros/registerErrorsTypes";

export const UserError = (
  error: RegisterError | object | string,
  success?: boolean,
  TypeError?: string,
  codeError?: number,
  messageTranslated?: string
) => {
  return {
    error: error,
    success: success,
    typeError: TypeError,
    codeError: codeError,
    messageTranslated: messageTranslated,
  };
};
