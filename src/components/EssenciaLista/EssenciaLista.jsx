import React, { useState } from "react";
import EssenciaListaItem from "components/EssenciaListaItem/EssenciaListaItem";
import { essencias } from "mocks/essencias.js";
import "./EssenciaLista.css";

function EssenciaLista() {
  const [essenciaSelecionada, setEssenciaSelecionada] = useState({});

  const adicionarItem = (essenciaIndex) => {
    const essencia = {
      [essenciaIndex]: Number(essenciaSelecionada[essenciaIndex] || 0) + 1,
    };
    setEssenciaSelecionada({ ...essenciaSelecionada, ...essencia });
  };

  const removerItem = (essenciaIndex) => {
    const essencia = {
      [essenciaIndex]: Number(essenciaSelecionada[essenciaIndex] || 0) - 1,
    };
    setEssenciaSelecionada({ ...essenciaSelecionada, ...essencia });
  };

  return (
    <div className="EssenciaLista">
      {essencias.map((essencia, index) => (
        <EssenciaListaItem 
          key={`EssenciaListaItem-${index}`} 
          essencia = {essencia}
          quantidadeSelecionada={essenciaSelecionada[index]}
          index={index} 
          onRemove={index => removerItem(index)}
          onAdd={index => adicionarItem(index)} />
      ))}
    </div>
  );
}

export default EssenciaLista;
