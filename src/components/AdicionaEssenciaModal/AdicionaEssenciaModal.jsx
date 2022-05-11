import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { EssenciaService } from "services/EssenciaService";

import "./AdicionaEssenciaModal/AdicionaEssenciaModal.css";

function AdicionaEssenciaModal({ closeModal, onCreateEssencia }) {
  const form = {
    titulo: "",
    preco: "",
    sabor: "",
    aroma: "",
    descricao: "",
    foto: "",
    front: "",
  };

  const [state, setState] = useState(form);
  const [canDisable, setCanDisable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.descricao.length &&
        state.foto.length &&
        state.preco.length &&
        state.sabor.length &&
        state.front.length &&
        state.titulo.length
    );
    setCanDisable(response);
  };

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  useEffect(() => {
    canDisableSendButton();
  });

  const createEssencia = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split("\\").pop();

    const { titulo, sabor, aroma, descricao, preco, foto, front } = state;

    const essencia = {
      titulo,
      descricao,
      preco,
      aroma,
      sabor,
      foto: `assets/images/${renomeiaCaminhoFoto(foto)}`,
      front: `assets/images/${renomeiaCaminhoFoto(front)}`,
    };

    const response = await EssenciaService.create(essencia);
    onCreateEssencia(response);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaEssenciaModal">
        <form autoComplete="off">
          <h2>Adicionar ao Cardápio</h2>
          <div>
            <label className="AdicionaEssenciaModal__text" htmlFor="titulo">
              Título:{" "}
            </label>
            <input
              id="titulo"
              type="text"
              placeholder="Cherry Starburst"
              value={state.titulo}
              onChange={(e) => handleChange(e, "titulo")}
              required
            />
          </div>
          <div>
            <label className="AdicionaEssenciaModal__text" htmlFor="preco">
              Preço:{" "}
            </label>
            <input
              id="preco"
              type="text"
              placeholder="R$ 10,00"
              value={state.preco}
              onChange={(e) => handleChange(e, "preco")}
              required
            />
          </div>
          <div>
            <label className="AdicionaEssenciaModal__text" htmlFor="sabor">
              Sabor:{" "}
            </label>
            <input
              id="sabor"
              type="text"
              placeholder="Cereja"
              value={state.sabor}
              onChange={(e) => handleChange(e, "sabor")}
              required
            />
          </div>
          <div>
            <label className="AdicionaEssenciaModal__text" htmlFor="aroma">
              Aroma:{" "}
            </label>
            <input
              id="aroma"
              type="text"
              placeholder="Doce"
              value={state.aroma}
              onChange={(e) => handleChange(e, "aroma")}
            />
          </div>
          <div>
            <label className="AdicionaEssenciaModal__text" htmlFor="descricao">
              Descrição:{" "}
            </label>
            <input
              id="descricao"
              type="text"
              placeholder="Detalhe o produto"
              value={state.descricao}
              onChange={(e) => handleChange(e, "descricao")}
              required
            />
          </div>
          <div>
            <label
              className="AdicionaEssenciaModal__text AdicionaEssenciaModal__foto-label"
              htmlFor="foto"
            >
              {!state.foto.length
                ? "Selecionar Imagem da Essência"
                : state.foto}
            </label>
            <input
              className="AdicionaEssenciaModal__foto"
              id="foto"
              type="file"
              accept="image/png, image/gif, image/jpeg, image/_png"
              value={state.foto}
              onChange={(e) => handleChange(e, "foto")}
              required
            />
          </div>
          <div>
            <label
              className="AdicionaEssenciaModal__text AdicionaEssenciaModal__foto-label"
              htmlFor="front"
            >
              {!state.front.length ? "Selecionar Imagem do Sabor" : state.front}
            </label>
            <input
              className="AdicionaEssenciaModal__foto"
              id="front"
              type="file"
              value={state.front}
              onChange={(e) => handleChange(e, "front")}
              required
            />
          </div>
          <button
            type="button"
            disabled={canDisable}
            className="AdicionaEssenciaModal__enviar"
            onClick={createEssencia} >
            Enviar
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaEssenciaModal;
