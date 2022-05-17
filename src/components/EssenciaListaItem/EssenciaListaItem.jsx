import { ActionMode } from "constants/index";
import "./EssenciaListaItem.css";

function EssenciaListaItem({
  essencia,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) {
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="EssenciaListaItem__badge">
        {" "}
        {quantidadeSelecionada}{" "}
      </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
        className="Acoes__remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        remover
      </button>
    );

  const badgeAction = (canRender) => {
    if (canRender)
      return (
        <span
          className={`EssenciaListaItem__tag ${
            mode === ActionMode.DELETAR && "EssenciaListaItem__tag--deletar"
          }`}
        >
          {" "}
          {mode}{" "}
        </span>
      );
  };
  return (
    <div
      className={`EssenciaListaItem 
      ${mode !== ActionMode.NORMAL && "EssenciaListaItem--disable"}
      ${mode === ActionMode.DELETAR && "EssenciaListaItem--deletar"}`}
      onClick={() => clickItem(essencia.id)}
    >
      {badgeCounter(quantidadeSelecionada, index)}
      {badgeAction(mode !== ActionMode.NORMAL)}
      <div id="Front">
        <img
          className="EssenciaListaItem__front"
          src={essencia.front}
          alt={`Essência de ${essencia.sabor}`}
        ></img>
        <span id="Text-image">{`${essencia.sabor}`}</span>
      </div>
      <div className="EssenciaListaItem__content">
        <div className="EssenciaListaItem__titulo">{essencia.titulo}</div>
        <div className="EssenciaListaItem__preco">
          R${essencia.preco.toFixed(2)}
        </div>
        <div className="EssenciaListaItem__descricao">{essencia.descricao}</div>
        <div className="EssenciaListaItem__acoes Acoes">
          <button
            disabled={mode !== ActionMode.NORMAL}
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img
        className="EssenciaListaItem__foto"
        src={essencia.foto}
        alt={`Essência de ${essencia.sabor}`}
      />
    </div>
  );
}

export default EssenciaListaItem;
