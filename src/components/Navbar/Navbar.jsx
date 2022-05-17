import { ActionMode } from "constants/index";
import "./Navbar.css";
import sacola from "assets/icons/sacola.svg";
import plusCard from "assets/icons/plus_card.svg";
import logo from "assets/logo.png";
import edit from "assets/icons/edit.svg";
import deletar from "assets/icons/deletar.svg";

function Navbar({ createEssencia, updateEssencia, mode, deleteEssencia }) {
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
          <button
            type="button"
            className={`Opcoes__essencia Essencia ${
              mode === ActionMode.ATUALIZAR && "Essencia--ativa"
            }`}
            onClick={() => updateEssencia()}
          >
            <img
              src={edit}
              width="40px"
              className="Essencia__icone"
              alt="Editar Essencia"
            />
          </button>

          <button
            type="button"
            className={`Opcoes__essencia Essencia ${
              mode === ActionMode.DELETAR && "Essencia--deletar"
            }`}
            onClick={() => deleteEssencia()}
          >
            <img
              src={deletar}
              width="40px"
              className="Essencia__icone"
              alt="Deletar Essencia"
            />
          </button>

          <button
            type="button"
            className="Opcoes__essencia Essencia"
            onClick={() => createEssencia()}
          >
            <img
              src={plusCard}
              width="40px"
              className="Essencia__icone"
              alt="Adicionar Essencia"
            />
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
