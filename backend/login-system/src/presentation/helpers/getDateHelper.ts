export const getDateHelper = () => {
  const dataAtual = new Date();
  const options = { timeZone: "America/Sao_Paulo" };
  const dataHoraBrasil = dataAtual.toLocaleString("pt-BR", options);
  return dataHoraBrasil;
};
