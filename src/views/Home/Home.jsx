import { useState } from "react";
import { ActionMode } from "constants/index";
import EssenciaLista from "components/EssenciaLista/EssenciaLista";
import Navbar from "components/Navbar/Navbar";
import AdicionaEditaEssenciaModal from "components/AdicionaEditaEssenciaModal/AdicionaEditaEssenciaModal";
import "./Home.css";

function Home() {

  const [essenciaEditada, setEssenciaEditada] = useState();
  const [canShowAdicionaEssenciaModal, setCanShowAdicionaEssenciaModal] =
    useState(false);
  const [essenciaParaAdicionar, setEssenciaParaAdicionar] = useState();

  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  const [essenciaParaEditar, setEssenciaParaEditar] = useState();
  const [essenciaParaDeletar, setEssenciaParaDeletar] = useState();

  const handleDeleteEssencia = (essenciaToDelete) => {
    setEssenciaParaDeletar(essenciaToDelete);
  }
  
  const handleUpdateEssencia = (essenciaToUpdate) => {
    setEssenciaParaEditar(essenciaToUpdate);
    setCanShowAdicionaEssenciaModal(true);
  }

  const handleCloseModal = () => {
    setCanShowAdicionaEssenciaModal(false);
    setEssenciaParaAdicionar();
    setEssenciaParaDeletar();
    setEssenciaParaEditar();
    setModoAtual(ActionMode.NORMAL);
  }

  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        createEssencia={() => setCanShowAdicionaEssenciaModal(true)}
        updateEssencia={() => handleActions(ActionMode.ATUALIZAR)}
        deleteEssencia={() => handleActions(ActionMode.DELETAR)}
      />
      <div className="Home__container">
        <EssenciaLista
          mode={modoAtual}
          essenciaCriada={essenciaParaAdicionar}
          essenciaEditada={essenciaEditada}
          deleteEssencia={handleDeleteEssencia}
          updateEssencia={handleUpdateEssencia}
        />
        {canShowAdicionaEssenciaModal && (
          <AdicionaEditaEssenciaModal
            mode={modoAtual}
            essenciaToUpdate={essenciaParaEditar}
            onUpdateEssencia={(essencia) => setEssenciaEditada(essencia)}
            closeModal={handleCloseModal}
            onCreateEssencia={(essencia) => setEssenciaParaAdicionar(essencia)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
