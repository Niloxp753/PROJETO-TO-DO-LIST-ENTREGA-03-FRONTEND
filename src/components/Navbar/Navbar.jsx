import "./Navbar.css";
import sacola from "assets/icons/sacola.svg";
import plusCard from "assets/icons/plus_card.svg";
import logo from "assets/logo.png";

function Navbar({createEssencia}) {
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="80px"
            alt="Logo MG Tabacaria"
            className="Logo__icone"
          />
          <span className="Logo__titulo">Tobacco Store</span>
        </div>
        <div className="Header__opcoes Opcoes">
          <button type="button" className="Opcoes__essencia Essencia" onClick={() => createEssencia()}>
            <img src={plusCard} width="40px" className="Essencia__icone" alt="Adicionar Essencia" />
          </button>
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
  );
}

export default Navbar;
