import { useState } from "react";
import EssenciaLista from "components/EssenciaLista/EssenciaLista";
import Navbar from "components/Navbar/Navbar";
import AdicionaEssenciaModal from "components/AdicionaEssenciaModal/AdicionaEssenciaModal";
import "./Home.css";

function Home() {
  const [canShowAdicionaEssenciaModal, setCanShowAdicionaEssenciaModal] =
    useState(false);
  const [essenciaParaAdicionar, setEssenciaParaAdicionar] = useState();
  return (
    <div className="Home">
      <Navbar createEssencia={() => setCanShowAdicionaEssenciaModal(true)} />
      <div className="Home__container">
        <EssenciaLista essenciaCriada={essenciaParaAdicionar} />
        {canShowAdicionaEssenciaModal && 
          <AdicionaEssenciaModal
            closeModal={() => setCanShowAdicionaEssenciaModal(false)}
            onCreateEssencia={(essencia) => setEssenciaParaAdicionar(essencia)}
          />
        }
      </div>
    </div>
  );
}

export default Home;
