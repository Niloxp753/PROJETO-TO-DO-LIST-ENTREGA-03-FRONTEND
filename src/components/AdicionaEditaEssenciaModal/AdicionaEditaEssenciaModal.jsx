import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { EssenciaService } from "services/EssenciaService";
import { ActionMode } from "constants/index";
import "./AdicionaEditaEssenciaModal.css";


function AdicionaEditaEssenciaModal({ closeModal, onCreateEssencia, mode, essenciaToUpdate, onUpdateEssencia }) {
  const form = {
    titulo: essenciaToUpdate?.titulo ?? "",
    preco: essenciaToUpdate?.preco ?? "",
    sabor: essenciaToUpdate?.sabor ?? "",
    descricao: essenciaToUpdate?.descricao ?? "",
    foto: essenciaToUpdate?.foto ?? "",
    front: essenciaToUpdate?.front ?? "",
  };

  const [state, setState] = useState(form);
  const [canDisable, setCanDisable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.descricao.length &&
        state.foto.length &&
        String(state.preco).length &&
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

  const handleSend = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split(/\\|\//).pop();

    const { titulo, sabor, descricao, preco, foto, front } = state;

    const essencia = {
      ...(essenciaToUpdate && { _id: essenciaToUpdate?.id }),
      titulo,
      descricao,
      preco,
      sabor,
      foto: `assets/images/${renomeiaCaminhoFoto(foto)}`,
      front: `assets/images/${renomeiaCaminhoFoto(front)}`,
    };

    const serviceCall = {
      [ActionMode.NORMAL]: () => EssenciaService.create(essencia),
      [ActionMode.ATUALIZAR]: () => EssenciaService.updtateById(essenciaToUpdate?.id, essencia),
    }

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreateEssencia(response),
      [ActionMode.ATUALIZAR]: () => onUpdateEssencia(response),
    }

    actionResponse[mode]();

    const reset = {
      titulo: '',
      descricao: '',
      preco: '',
      sabor: '',
      foto: '',
      front: '',
    }

    setState(reset);

    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaEssenciaModal">
        <form autoComplete="off">
        <h2> { ActionMode.ATUALIZAR === mode ? 'Atualizar' : 'Adicionar ao' } Cardápio </h2>
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
              onChange={(e) => handleChange(e, "front")}
              required
            />
          </div>
          <button
            className="AdicionaEssenciaModal__enviar"
            type="button"
            disabled={canDisable}
            onClick={handleSend} >
            {ActionMode.NORMAL === mode ? 'Enviar' : 'Atualizar'}
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaEditaEssenciaModal;
