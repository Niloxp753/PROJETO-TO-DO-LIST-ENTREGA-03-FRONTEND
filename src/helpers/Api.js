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
  baseUrl: "https://projeto-to-do-list-entrega-03-entrega-04-react.vercel.app/",
  ...EssenciaContext,
};
