import "./DeletaEssenciaModal.css";
import Modal from "components/Modal/Modal";
import { EssenciaService } from "services/EssenciaService";

function DeletaEssenciaModal({
  closeModal,
  essenciaParaDeletar,
  onDeleteEssencia,
}) {
  const handleDelete = async (essencia) => {
    await EssenciaService.deleteById(essencia.id);
    onDeleteEssencia(essencia);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeletaEssenciaModal">
        <h2>Confirmação</h2>
        <p>
          Você realmente deseja remover <b>{essenciaParaDeletar.titulo}</b> do
          cardápio?
        </p>

        <img
          className="DeletaEssenciaModal__foto"
          src={essenciaParaDeletar.foto}
          alt={essenciaParaDeletar.titulo}
        />

        <br />

        <div>
          <button
            onClick={() => handleDelete(essenciaParaDeletar)}
            className="DeletaEssenciaModal__confirmar"
          >
            {" "}
            Confirmar{" "}
          </button>
          <button
            onClick={closeModal}
            className="DeletaEssenciaModal__cancelar"
          >
            {" "}
            Cancelar{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletaEssenciaModal;
