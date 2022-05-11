import { useState } from "react";
import EssenciaLista from "components/EssenciaLista/EssenciaLista";
import Navbar from "components/Navbar/Navbar";
import AdicionaEssenciaModal from "components/AdicionaEssenciaModal/AdicionaEssenciaModal";
import "./Home.css";


function Home() {

  const [canShowAdicionaEssenciaModal, setCanShowEssenciaModal] = useState(false);
  return (
    <div className="Home">
      <Navbar createEssencia={() => setCanShowEssenciaModal(true)}/>
      <div className="Home__container">
        <EssenciaLista />
        {
          canShowAdicionaEssenciaModal && (<AdicionaEssenciaModal closeModal={() => setCanShowEssenciaModal(false)}/>);
        }
      </div>
    </div>
  );
}

export default Home;
