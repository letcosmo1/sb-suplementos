import {
  birthType,
  confirmPasswordType,
  emailType,
  nameType,
  passwordType,
  surnameType,
  telephoneType,
} from "@Types/userTypes";

export interface userRegisterInterface {
  name: nameType;
  surname: surnameType;
  telephone: telephoneType;
  birth: birthType;
  email: emailType;
  password: passwordType;
  confirmPassword: confirmPasswordType;
}

export interface userLoginInterface {
  email: emailType;
  password: passwordType;
}

export interface sendTokenInterface{
  email: emailType;
}

export interface redefinePasswordInterface{
  id: any,
  code: any,
  exp: number,
  iat: number
}

export interface passConfirmPassInterface{
  password: any
  confirmPassword: any
}