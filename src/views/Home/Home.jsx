import EssenciaLista from "components/EssenciaLista/EssenciaLista";
import Navbar from "components/Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <EssenciaLista />
      </div>
    </div>
  );
}

export default Home;
