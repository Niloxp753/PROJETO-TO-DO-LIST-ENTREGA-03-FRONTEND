import EssenciaLista from "./EssenciaLista";
import "./Home.css";
import sacola from "../assets/icons/sacola.svg";
import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="Home">
      <div className="Home__header Header">
        <div className="row">
          <div className="Header__logo Logo">
            <img
              src={logo}
              width="80px"
              alt="Logo MG Tabacaria"
              className="Logo__icone"
            />
            <span className="Logo__titulo"> M.G Tabacaria </span>
          </div>
          <div className="Header__opcoes Opcoes">
            <div className="Opcoes__sacola Sacola">
              <img
                src={sacola}
                width="45px"
                className="Sacola__icone"
                alt="Sacola de compras"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Home__container">
        <EssenciaLista />
      </div>
    </div>
  );
}

export default Home;
