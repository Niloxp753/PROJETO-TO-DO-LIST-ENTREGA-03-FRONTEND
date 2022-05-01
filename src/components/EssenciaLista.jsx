import React, { useState } from "react";
import { essencias } from "../mocks/essencias.js";
import "./EssenciaLista.css";

function EssenciaLista() {
  const [essenciaSelecionada, setEssenciaSelecionada] = useState({});

  const adicionarItem = (essenciaIndex) => {
    const essencia = {
      [essenciaIndex]: Number(essenciaSelecionada[essenciaIndex] || 0) + 1,
    };
    setEssenciaSelecionada({ ...essenciaSelecionada, ...essencia });
  };

  return (
    <div className="EssenciaLista">
      {essencias.map((essencia, index) => (
        <div className="EssenciaListaItem" key={`EssenciaListaItem-${index}`}>
          <span className="EssenciaListaItem__badge">
            {essenciaSelecionada[index] || 0}
          </span>
          <div className="EssenciaListaItem__content">
            <div className="EssenciaListaItem__titulo">{essencia.titulo}</div>
            <div className="EssenciaListaItem__preco">
              {essencia.preco.toFixed(2)}
            </div>
            <div className="EssenciaListaItem__descricao">
              {essencia.descricao}
            </div>
            <div className="EssenciaListaItem__acoes Acoes">
              <button
                className="Acoes__adicionar Acoes__adicionar--preencher"
                onClick={() => adicionarItem(index)}
              >
                adicionar
              </button>
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
      ))}
    </div>
  );
}

export default EssenciaLista;
