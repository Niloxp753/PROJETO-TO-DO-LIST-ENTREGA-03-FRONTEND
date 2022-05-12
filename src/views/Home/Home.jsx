import { useState } from "react";
import { ActionMode } from "constants/index";
import EssenciaLista from "components/EssenciaLista/EssenciaLista";
import Navbar from "components/Navbar/Navbar";
import AdicionaEditaEssenciaModal from "components/AdicionaEditaEssenciaModal/AdicionaEditaEssenciaModal";
import "./Home.css";

function Home() {
  const [canShowAdicionaEssenciaModal, setCanShowAdicionaEssenciaModal] =
    useState(false);
  const [essenciaParaAdicionar, setEssenciaParaAdicionar] = useState();

  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        createEssencia={() => setCanShowAdicionaEssenciaModal(true)}
        updateEssencia={() => handleActions(ActionMode.ATUALIZAR)}
      />
      <div className="Home__container">
        <EssenciaLista 
          mode={modoAtual}
          essenciaCriada={essenciaParaAdicionar} />
        {canShowAdicionaEssenciaModal && (
          <AdicionaEditaEssenciaModal
            closeModal={() => setCanShowAdicionaEssenciaModal(false)}
            onCreateEssencia={(essencia) => setEssenciaParaAdicionar(essencia)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
