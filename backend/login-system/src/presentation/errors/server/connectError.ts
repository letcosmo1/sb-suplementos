import { connectErrorsTypes } from "@EntitiesErros/connectErrorsTypes";

export const connectError = (error: connectErrorsTypes) => {    
  return { success: false, error: error };
};
