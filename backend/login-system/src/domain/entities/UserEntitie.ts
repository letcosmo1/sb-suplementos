import {
  birthType,
  confirmPasswordType,
  emailType,
  nameType,
  passwordType,
  surnameType,
  telephoneType,
} from "@Types/userTypes";

export class UserRegisterEntitie {
  name: nameType;
  surname: surnameType;
  telephone: telephoneType;
  birth: birthType;
  email: emailType;
  password: passwordType;
  confirmPassword: confirmPasswordType;

  constructor(
    name: nameType,
    surname: surnameType,
    telephone: telephoneType,
    birth: birthType,
    email: emailType,
    password: passwordType,
    confirmPassword: confirmPasswordType
  ) {
    this.name = name;
    this.surname = surname;
    this.telephone = telephone;
    this.birth = birth;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}

export class UserLoginEntitie {
  email: emailType;
  password: passwordType;

  constructor(email: emailType, password: passwordType) {
    this.email = email;
    this.password = password;
  }
}

export class SendTokenEntitie {
  email: emailType;

  constructor(email: emailType) {
    this.email = email;
  }
}

export class ConfirmPasswordEntitie {
  password: passwordType;
  confirmPassword: confirmPasswordType;

  constructor(password: passwordType, confirmPassword: confirmPasswordType) {
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
