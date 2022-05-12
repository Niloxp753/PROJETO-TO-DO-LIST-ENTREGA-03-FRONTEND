const EssenciaContext = {
  essenciaEndpoint: () => `${Api.baseUrl}/essencias`,
  essenciaLista: () => `${EssenciaContext.essenciaEndpoint()}/all-essencias`,
  essenciaById: (id) =>
    `${EssenciaContext.essenciaEndpoint()}/one-essencia/${id}`,
  createEssencia: () => `${EssenciaContext.essenciaEndpoint()}/create-essencia`,
  updateEssenciaById: (id) =>
    `${EssenciaContext.essenciaEndpoint()}/update-essencia/${id}`,
  deleteEssenciaById: (id) =>
    `${EssenciaContext.essenciaEndpoint()}/delete-essencia/${id}`,
};

export const Api = {
  baseUrl: "https://apimbtabacaria-blue.onrender.com",
  ...EssenciaContext,
};
