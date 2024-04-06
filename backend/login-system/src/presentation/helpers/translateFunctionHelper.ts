export const translateFunction = (errors?: any[]) => {
  if (!errors || errors.length === 0) {
    return ["Erro de validação desconhecido."];
  }

  const translatedMessages = errors.map((error) => {
    switch (error.message) {
      case 'must match format "email"':
        return "Insira um email com formato válido.";
      case 'must have required property "confirmPassword"':
        return "Preencha o campo confirmar senha.";
      default:
        return "Erro de validação desconhecido.";
    }
  });

  return translatedMessages;
};