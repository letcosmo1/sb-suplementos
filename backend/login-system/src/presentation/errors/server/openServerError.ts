import { serverOpenError } from "@EntitiesErros/serverErrorsTypes";

export const openServerError = (error: serverOpenError) => {    
  return { success: false, error: error };
};
