import "./EssenciaListaItem.css";

function EssenciaListaItem({essencia, quantidadeSelecionada, index, onRemove, onAdd}) {

 

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="EssenciaListaItem__badge">
        {" "}
        {quantidadeSelecionada}{" "}
      </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        remover
      </button>
    );
  return (
    <div className="EssenciaListaItem">
      {badgeCounter(quantidadeSelecionada, index)}
      <div className="EssenciaListaItem__content">
        <div className="EssenciaListaItem__titulo">{essencia.titulo}</div>
        <div className="EssenciaListaItem__preco">
          {essencia.preco.toFixed(2)}
        </div>
        <div className="EssenciaListaItem__descricao">{essencia.descricao}</div>
        <div className="EssenciaListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={() => onAdd(index)}
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
      <div id="Front">
        <img
          className="EssenciaListaItem__front"
          src={essencia.front}
          alt={`Essência de ${essencia.sabor}`}
        ></img>
        <span id="Text-image">{`${essencia.titulo}`}</span>
      </div>
    </div>
  );
}

export default EssenciaListaItem;
